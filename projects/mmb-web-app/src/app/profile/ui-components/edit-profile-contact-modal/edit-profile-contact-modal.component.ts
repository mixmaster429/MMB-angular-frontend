import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '@sentry/browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mmb-web-app-edit-profile-contact-modal',
  templateUrl: './edit-profile-contact-modal.component.html',
  styleUrls: ['./edit-profile-contact-modal.component.scss']
})
export class EditProfileContactModalComponent implements OnInit {
  @Input() public user: User;
  showEditContactContent: boolean = false;

  editContactForm = this.fb.group({
    email: ['', Validators.required],
    phone: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, public modal: NgbActiveModal) { }

  ngOnInit() {
  }
  closeModal() {
    this.modal.dismiss();
  }
}
