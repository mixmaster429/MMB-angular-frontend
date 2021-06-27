import { Injectable } from '@angular/core';
import { Status } from '../apply.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'projects/mmb-web-app/src/environments/environment';
import { map } from 'rxjs/operators';
import { PresignedUrlResponse } from '../../types/presigned-url-response.model';
import { Observable } from 'rxjs';
import { ApplyCareerService } from '../apply.service';

export enum RESOURCE_TYPE {
    CV = 'cv',
    COVER_LETTER = 'cl'
}

export enum ContentType {
    OctetStream = 'application/octet-stream'
}

@Injectable({
    providedIn: 'root',
})
export class DocsUploadStepService {
    status: Status;
    stepData = {
        cvUrl: '',
        coverLetterUrl: ''
    };

    constructor(private http: HttpClient, private applyService: ApplyCareerService) { }

    getStepStatus(): Status {
        return this.status;
    }

    /**
     * Gets presigned url
     */
    getPresignedUrl(file: File, objectId: number, type: RESOURCE_TYPE): Observable<PresignedUrlResponse> {
        let data = {
            file_name: file.name,
            obj_id: objectId,
            resource_type: 'application-cv'
        };

        if (type === RESOURCE_TYPE.COVER_LETTER) {
            data.resource_type = 'application-cover-letter';
        }
        this.applyService.setDocsUploadStepData(data);
        let url = `${environment.domain}${environment.api.career.presignedUrl}`;

        return this.http.post(url, data).pipe(
            map((response: HttpResponse<any>): PresignedUrlResponse => {
                return (<any>response);
            })
        );
    }

    /**
     * Uploads file to AWS
     * @param presignedUrl presigned url from AWS
     * @param file Upload file
     */
    uploadFile(presignedUrl: any, file: File, type: RESOURCE_TYPE = RESOURCE_TYPE.CV) {
        const formData = new FormData();
        formData.append('key', presignedUrl.fields.key);
        formData.append('policy', presignedUrl.fields.policy);
        formData.append('x-amz-date', presignedUrl.fields['x-amz-date']);
        formData.append('x-amz-credential', presignedUrl.fields['x-amz-credential']);
        formData.append('x-amz-algorithm', presignedUrl.fields['x-amz-algorithm']);
        formData.append('x-amz-signature', presignedUrl.fields['x-amz-signature']);
        formData.append('file', file);
        // set the url name for confirmation step
        if (type === RESOURCE_TYPE.CV) {
            this.stepData.cvUrl = presignedUrl.fields.key;
        } else {
            this.stepData.coverLetterUrl = presignedUrl.fields.key;
        }
        return this.http.post(
            presignedUrl.url, formData).pipe(
                map((response: HttpResponse<any>): any => {
                    return (<any>response);
                })
            );
    }

    /**
     * Converts the key to mmb format
     */
    private _getKeyInFormat(type: string, fileExtension: string) {
        let user = JSON.parse(localStorage.getItem('user'));
        const date: Date = new Date();
        return `${this._convertToDashedName(user.first_name)}-${this._convertToDashedName(user.last_name)}-${type}_career_app-${this.applyService.selectedCareerDetails.id}-${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${Date.now()}.${fileExtension}`;
    }

    /** Convert to dashed name */
    private _convertToDashedName(value: string) {
        return value.replace(/ /g, '-').toLowerCase();
    }
}