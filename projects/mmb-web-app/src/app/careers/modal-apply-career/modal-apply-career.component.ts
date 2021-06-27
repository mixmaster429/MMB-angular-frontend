import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Career } from '../../shared/types/career.model';
import PubSub from 'pubsub-js';
import { CARRER_EVENT } from '../types/career-event.model';

@Component({
  selector: 'mmb-web-app-modal-apply-career',
  templateUrl: './modal-apply-career.component.html',
  styleUrls: ['./modal-apply-career.component.scss']
})
export class ModalApplyCareerComponent implements OnInit {
  @Input() selectedCareerDetails: Career;
  @Output() applicationSubmitted: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

  onNext() {
    PubSub.publish(CARRER_EVENT.APPLY_CAREER_NEXT);
  }

  onApplicationSubmitted(ev) {
    this.applicationSubmitted.emit(ev);
  }
}
