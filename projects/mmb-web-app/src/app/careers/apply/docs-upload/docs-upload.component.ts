import { Component, OnInit, Input } from '@angular/core';
import { DocsUploadStepService, RESOURCE_TYPE } from './docs-upload.service';
import { PresignedUrlResponse } from '../../types/presigned-url-response.model';
import { Status } from '../apply.component';
import { ApplyCareerService } from '../apply.service';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-docs-upload',
  templateUrl: './docs-upload.component.html',
  styleUrls: ['./docs-upload.component.scss']
})
export class DocsUploadComponent implements OnInit {
  cvFileName: string;
  clFileName: string;
  isCvUploading: boolean = false;
  isCoverLetterUploading: boolean = false;
  cvDownloadUrl: string;
  coverLetterDownloadUrl: string;
  @Input() careerId: number;
  @Input() selectedCareerDetails: Career;

  constructor(private docsUploadService: DocsUploadStepService, private applyService: ApplyCareerService) {
    this.docsUploadService.status = Status.error;
  }

  ngOnInit() {
  }

  onCvChange(ev) {
    this.isCvUploading = true;

    if (ev && ev.currentTarget && ev.currentTarget.files) {
      var file = ev.currentTarget.files[0];
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

  /**
   * cover letter upload file change
   * @param ev event
   */
  onCoverLetterChange(ev) {
    this.isCoverLetterUploading = true;

    if (ev && ev.currentTarget && ev.currentTarget.files) {
      var file = ev.currentTarget.files[0];
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
