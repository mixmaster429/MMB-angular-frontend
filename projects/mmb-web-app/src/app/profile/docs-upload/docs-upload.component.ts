import { Component, OnInit, Input } from '@angular/core';
import { DocsUploadStepService, RESOURCE_TYPE } from './docs-upload.service';
import { PresignedUrlResponse } from '../types/presigned-url-response.model';
import { ProfileService } from './../profile.service';
import { Status } from '../ui-components/user-introduction-info/user-introduction-info.component';
import { UserDetails } from '../types/helpers/user-details.model';
import { User } from '../types/user.model';

@Component({
  selector: 'mmb-web-app-image-upload',
  templateUrl: './docs-upload.component.html',
  styleUrls: ['./docs-upload.component.scss']
})

export class DocsUploadComponent implements OnInit {
  @Input() user: UserDetails;
  @Input() id: string; // id have to be made dynamic as multiple ids cannot exist on same page
  @Input() isEditMode: boolean = true;
  imageFileName: string;
  isImageUploading: boolean = false;
  isCoverLetterUploading: boolean = false;
  imageDownloadUrl: string;
  imagePresignedName: string;

  constructor(private docsUploadService: DocsUploadStepService, private profileService: ProfileService) {
    this.docsUploadService.status = Status.error;
  }

  ngOnInit() {
  }

  onImageChange(ev) {
    this.isImageUploading = true;

    if (ev && ev.currentTarget && ev.currentTarget.files) {
      let file = ev.currentTarget.files[0];
      this.imageFileName = file.name;

      this.profileService.setDocsUploadStepData({ user_picture: file.name });

      // Get presigned url
      this.docsUploadService.getPresignedUrl(file, 1, RESOURCE_TYPE.USER_PICTURE)
        .subscribe((resp: PresignedUrlResponse) => {
          // Once presigned is success, call file upload api
          this.imageDownloadUrl = resp.presigned_url;
          this.imagePresignedName = resp.file_name;
          this.docsUploadService.uploadFile(resp.presigned_url, file).subscribe((response) => {
            // Uploaded successfully
            this.docsUploadService.status = Status.done;
            this.profileService.updateUserProfileImage(this.imagePresignedName).subscribe(() => {
              this.profileService.getUserProfile().subscribe((response: User) => {
                this.isImageUploading = false;
                this.user.profile_image = response.profile_image;
              });
            });
          });
        });
    }
  }
}
