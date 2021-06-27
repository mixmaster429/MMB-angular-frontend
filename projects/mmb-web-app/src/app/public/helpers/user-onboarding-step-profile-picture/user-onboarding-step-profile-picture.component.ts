import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'mmb-web-app-user-onboarding-step-profile-picture',
  templateUrl: './user-onboarding-step-profile-picture.component.html',
  styleUrls: ['./user-onboarding-step-profile-picture.component.scss']
})
export class UserOnboardingStepProfilePictureComponent implements OnInit {
  files: NgxFileDropEntry[];
  @Output() back: EventEmitter<any> = new EventEmitter<any>();
  @Output() next: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }


  /**
   * File dropped/selected
   * @param files 
   */
  dropped(files: NgxFileDropEntry[]) {
    this.files = files;
  }

  /**
   * Next event
   */
  onNext() {
    this.next.emit();
  }

  /**
   * Next event
   */
  onBack() {
    this.back.emit();
  }
}
