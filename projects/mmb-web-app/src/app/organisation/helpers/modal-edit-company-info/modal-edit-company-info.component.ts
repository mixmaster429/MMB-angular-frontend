import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'mmb-web-app-modal-edit-company-info',
  templateUrl: './modal-edit-company-info.component.html',
  styleUrls: ['./modal-edit-company-info.component.scss']
})
export class ModalEditCompanyInfoComponent implements OnInit {
  @Input() orgImage: string = 'assets/images/avatars/not-found.png';
  @Input() orgName: string;
  @Input() summary: string;
  @Input() website: string;
  @Input() about: string = '';
  isAdvancedPanActive: boolean;
  Editor = ClassicEditor;
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }

}
