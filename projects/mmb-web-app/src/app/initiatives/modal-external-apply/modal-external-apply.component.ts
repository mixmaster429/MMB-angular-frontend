import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { InitiativesService } from '../initiatives.service';

@Component({
  selector: 'mmb-web-app-modal-external-apply',
  templateUrl: './modal-external-apply.component.html',
  styleUrls: ['./modal-external-apply.component.scss']
})
export class ModalExternalApplyComponent implements OnInit {
  @Input() orgLogo: string;
  @Input() orgName: string;
  @Input() redirectUrl: string;
  @Input() initiativeId: number;
  @Input() experienceName: string;
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();

  externalApplyForm: FormGroup;
  options = [];
  intentValue: string;
  constructor(public modal: NgbActiveModal, private fb: FormBuilder, private initiativeService: InitiativesService, private toastr: ToastrService) { }

  ngOnInit() {
    this.externalApplyForm = this.fb.group({
      intent: ['', Validators.required],
      yourRequests: [''],
    });
    this.options = [
      {
        value: '1',
        viewValue: 'Submit an Application'
      },
      {
        value: '3',
        viewValue: 'Get more information on this opportunity'
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
        viewValue: `Find other ${this.orgName} opportunities`
      }
    ];
  }

  /**
   * On continue to external application
   */
  onContinue() {
    let redirectRef: string = `?ref=${this.createRedirectRef()}&referrer=movemeback.com`;
    this.initiativeService.onRegisterInitiative({
      'initiative': this.initiativeId,
      'redirect_url': this.redirectUrl,
      'intent': this.externalApplyForm.controls['intent'].value,
      'value': this.externalApplyForm.controls['intent'].value,
      'notes': this.externalApplyForm.controls['yourRequests'].value,
      'redirect_count': '1',
      'redirect_ref': redirectRef
    }).subscribe(() => {
      window.open(`${this.redirectUrl}${redirectRef}`);
      this.submitted.emit();
    }, (err) => {
      if (err && err.error && err.error.non_field_errors) {
        this.toastr.error(err.error.non_field_errors);
      } else {
        this.toastr.error('Error occurred while registering the initiative. Please contact admin!');
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
