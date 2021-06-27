import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Career } from '../../../shared/types/career.model';
import { Status } from '../../apply/apply.component';
import { ApplyCareerService } from '../../apply/apply.service';
import { DocsUploadStepService, RESOURCE_TYPE } from '../../apply/docs-upload/docs-upload.service';
import { PresignedUrlResponse } from '../../types/presigned-url-response.model';

@Component({
  selector: 'mmb-web-app-career-apply-select-box',
  templateUrl: './career-apply-select-box.component.html',
  styleUrls: ['./career-apply-select-box.component.scss']
})
export class CareerApplySelectBoxComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() isCv: boolean;
  @Input() title: string;
  @Input() selectedCareerDetails: Career;
  cvFileName: string;
  clFileName: string;
  isCvUploading: boolean = false;
  isCoverLetterUploading: boolean = false;
  cvDownloadUrl: string;
  coverLetterDownloadUrl: string;

  constructor(private docsUploadService: DocsUploadStepService, private applyService: ApplyCareerService) {
    this.docsUploadService.status = Status.error;
  }

  ngOnInit() {
  }

  onCvChange(ev) {
    this.isCvUploading = true;

    if (ev && ev.currentTarget && ev.currentTarget.files) {
      const file = ev.currentTarget.files[0];
      this.cvFileName = file.name;

      this.applyService.setDocsUploadStepData({ cv: file.name });

      // Get presigned url
      this.docsUploadService.getPresignedUrl(file, this.selectedCareerDetails.id, RESOURCE_TYPE.CV)
        .subscribe((resp: PresignedUrlResponse) => {
          // Once presigned is success, call file upload api
          this.cvDownloadUrl = resp.presigned_url;
          this.docsUploadService.uploadFile(resp.presigned_url, file).subscribe((resp) => {
            // Uploaded successfully
            this.isCvUploading = false;
            this.docsUploadService.status = Status.done;
          })
        });
    }
  }

  onCoverLetterChange(ev) {
    this.isCoverLetterUploading = true;

    if (ev && ev.currentTarget && ev.currentTarget.files) {
      const file = ev.currentTarget.files[0];
      this.clFileName = file.name;
      this.applyService.setDocsUploadStepData({ cl: file.name });
      // Get presigned url
      this.docsUploadService.getPresignedUrl(file, this.selectedCareerDetails.id, RESOURCE_TYPE.COVER_LETTER)
        .subscribe((resp: PresignedUrlResponse) => {
          // Once presigned is success, call file upload api
          this.cvDownloadUrl = resp.presigned_url;
          this.docsUploadService.uploadFile(resp.presigned_url, file).subscribe((resp) => {
            // Uploaded successfully
            this.isCoverLetterUploading = false;
          })
        });
    }
  }

}
