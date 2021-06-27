import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrService } from 'ngx-toastr';
import { ForumService } from '../forum.service';

@Component({
  selector: 'mmb-web-app-modal-create-new-answer',
  templateUrl: './modal-create-new-answer.component.html',
  styleUrls: ['./modal-create-new-answer.component.scss']
})
export class ModalCreateNewAnswerComponent implements OnInit {
  Editor = ClassicEditor;
  answer: string = '';
  @Input() questionId: number;
  @Output() answerSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor(public modal: NgbActiveModal, private toastr: ToastrService, private forumService: ForumService) { }

  ngOnInit() {
  }

  /**
   * Submit the answer
   */
  onSubmit() {
    if (this.answer.trim() === '') {
      this.toastr.error('Please provide an answer before submitting...', 'Error');
      return;
    }
    // Send the answer to api
    this.forumService.onSubmitAnswer(this.questionId, this.answer).subscribe(() => {
      this.answerSuccess.emit();
    }, (err) => this.toastr.error('Some error occurred while trying to save answer. Please retry or contact admin if issue persists', 'Error'));
  }
}
