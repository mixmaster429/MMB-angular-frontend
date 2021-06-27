import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mmb-web-app-career-apply-cancel-modal',
  templateUrl: './career-apply-cancel-modal.component.html',
  styleUrls: ['./career-apply-cancel-modal.component.scss']
})
export class CareerApplyCancelModalComponent implements OnInit {

  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
