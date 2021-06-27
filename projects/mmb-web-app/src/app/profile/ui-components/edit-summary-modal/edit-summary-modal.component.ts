import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../profile.service';
import { User } from '../../types/user.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mmb-web-app-summary-edit-modal',
  templateUrl: './edit-summary-modal.component.html',
  styleUrls: ['./edit-summary-modal.component.scss']
})
export class SummaryEditModalComponent implements OnInit {
  @Input() public user: User;
  @Output() addSuccess: EventEmitter<string> = new EventEmitter<string>();

  editProfileForm = this.fb.group({
    summary: ['', Validators.required],
  });

  constructor(private fb: FormBuilder,
              private profileService: ProfileService,
              public modal: NgbActiveModal,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * Try to login the user
   */
  updateSummary() {
    this.profileService.updateUserSummary(this.editProfileForm.controls['summary'].value)
      .subscribe((response: User) => {
        this.addSuccess.emit();
        this.modal.dismiss();
        this.toastr.success('Updated summary!');
      });
  }

  closeModal() {
    this.modal.dismiss();
  }
}
