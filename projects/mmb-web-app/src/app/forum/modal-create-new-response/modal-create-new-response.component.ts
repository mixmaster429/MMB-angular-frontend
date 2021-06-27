import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ForumService } from '../forum.service';

@Component({
  selector: 'mmb-web-app-modal-create-new-response',
  templateUrl: './modal-create-new-response.component.html',
  styleUrls: ['./modal-create-new-response.component.scss']
})
export class ModalCreateNewResponseComponent implements OnInit {
  @Input() slug: string;
  @Output() addSuccess: EventEmitter<string> = new EventEmitter<string>();

  response: string;
  Editor = ClassicEditor;
  newResponse = {
    editorData: ''
  };

  constructor(
    public modal: NgbActiveModal,
    private forumService: ForumService
  ) { }

  ngOnInit() {
  }

  /**
   * Submits the proposal
   */
  onSubmit() {
    // if (this.newResponse.editorData === '') {
    //   return;
    // }
    // this.forumService.postNewResponse(this.slug, this.newResponse.editorData).subscribe(() => {
    //   this.newResponse.editorData = '';
    // });
  }
}
