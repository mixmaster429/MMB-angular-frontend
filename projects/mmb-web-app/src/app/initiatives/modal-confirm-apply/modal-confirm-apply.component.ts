import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mmb-web-app-modal-confirm-apply',
  templateUrl: './modal-confirm-apply.component.html',
  styleUrls: ['./modal-confirm-apply.component.scss']
})
export class ModalConfirmApplyComponent implements OnInit {
  @Input() name: string;
  @Input() redirect_url: string;
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

  /**
   * on continue
   */
  onContinue() {
    window.open(this.redirect_url, '_blank');
  }
}
