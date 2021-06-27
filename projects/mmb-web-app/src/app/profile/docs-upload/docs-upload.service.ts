import { Injectable } from '@angular/core';
import { Status } from '../ui-components/user-introduction-info/user-introduction-info.component';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'projects/mmb-web-app/src/environments/environment';
import { map } from 'rxjs/operators';
import { PresignedUrlResponse } from '../types/presigned-url-response.model';
import { Observable } from 'rxjs';
import { ProfileService } from './../profile.service';

export enum RESOURCE_TYPE {
    USER_PICTURE = 'user-picture',
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
        imageUrl: '',
    };
    user = JSON.parse(localStorage.getItem('user'));

    constructor(private http: HttpClient, private profileService: ProfileService) { }

    getStepStatus(): Status {
        return this.status;
    }

    /**
     * Gets presigned url
     */
    getPresignedUrl(file: File, objectId: number, type: RESOURCE_TYPE): Observable<PresignedUrlResponse> {
        let data = {
            file_name: file.name,
            obj_id: this.user.id,
            resource_type: 'user-picture'
        };
        this.profileService.setDocsUploadStepData(data);
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
    uploadFile(presignedUrl: any, file: File, type: RESOURCE_TYPE = RESOURCE_TYPE.USER_PICTURE) {
        const formData = new FormData();
        formData.append('key', presignedUrl.fields.key);
        formData.append('policy', presignedUrl.fields.policy);
        formData.append('x-amz-date', presignedUrl.fields['x-amz-date']);
        formData.append('x-amz-credential', presignedUrl.fields['x-amz-credential']);
        formData.append('x-amz-algorithm', presignedUrl.fields['x-amz-algorithm']);
        formData.append('x-amz-signature', presignedUrl.fields['x-amz-signature']);
        formData.append('acl', presignedUrl.fields['acl']);
        formData.append('file', file);
        // set the url name for confirmation step
        if (type === RESOURCE_TYPE.USER_PICTURE) {
            this.stepData.imageUrl = presignedUrl.fields.key;
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
        return `${this._convertToDashedName(user.first_name)}-${this._convertToDashedName(user.last_name)}-${type}_career_app-${this.profileService.selectedCareerDetails.id}-${date.getFullYear()}-${date.getMonth()}-${date.getDate()}-${Date.now()}.${fileExtension}`;
    }

    /** Convert to dashed name */
    private _convertToDashedName(value: string) {
        return value.replace(/ /g, '-').toLowerCase();
    }
}