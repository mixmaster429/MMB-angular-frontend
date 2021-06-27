import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'mmb-universal-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss']
})
export class ModalContentComponent implements OnInit {
  state: {
    title: string,
    description: string
  };
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
