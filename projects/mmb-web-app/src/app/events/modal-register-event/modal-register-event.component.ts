import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventsService } from '../events.service';

@Component({
  selector: 'mmb-web-app-modal-register-event',
  templateUrl: './modal-register-event.component.html',
  styleUrls: ['./modal-register-event.component.scss']
})
export class ModalRegisterEventComponent implements OnInit {
  @Input() orgLogo: string;
  @Input() orgName: string;
  @Input() redirectUrl: string;
  @Input() eventId: number;
  @Input() eventName: string;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  externalApplyForm: FormGroup;
  options = [];
  intentValue: string;
  constructor(public modal: NgbActiveModal, private fb: FormBuilder, private eventService: EventsService, private toastr: ToastrService) { }

  ngOnInit() {
    this.externalApplyForm = this.fb.group({
      intent: ['', Validators.required],
      yourRequests: [''],
    });
    this.options = [
      {
        value: '1',
        viewValue: 'Register for the event'
      },
      {
        value: '3',
        viewValue: 'Get more information about the event'
      },
      {
        value: '4',
        viewValue: `Contact ${this.orgName}`
      },
      {
        value: '2',
        viewValue: 'General browsing and exploring'
      },
      {
        value: '5',
        viewValue: `Find other ${this.orgName} events`
      }
    ];
  }

  /**
   * On continue to external application
   */
  onContinue() {
    let redirectRef: string = `?ref=${this.createRedirectRef()}&referrer=movemeback.com`;
    this.eventService.onRegisterEvent({
      'event': this.eventId,
      'redirect_url': this.redirectUrl,
      'intent': this.externalApplyForm.controls['intent'].value,
      'value': this.externalApplyForm.controls['intent'].value,
      'notes': this.externalApplyForm.controls['yourRequests'].value,
      'redirect_count': '1',
      'redirect_ref': redirectRef
    }).subscribe(() => {
      this.submitted.emit();
      window.open(`${this.redirectUrl}${redirectRef}`);
    }, (err) => {
      if (err && err.error && err.error.non_field_errors) {
        this.toastr.error(err.error.non_field_errors);
      } else {
        this.toastr.error('Error occurred while registering the event. Please contact admin!');
      }
    });
  }

  /**
   * Generates redirect reference
   */
  private createRedirectRef() {
    return Date.now() + 'u' + localStorage.getItem('username') + Math.random().toString().substr(2, 20);;
  }
}
