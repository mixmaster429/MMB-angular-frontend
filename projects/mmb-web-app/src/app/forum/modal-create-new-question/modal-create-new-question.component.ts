import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder } from '@angular/forms';
import { ForumService } from '../forum.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mmb-web-app-modal-create-new-question',
  templateUrl: './modal-create-new-question.component.html',
  styleUrls: ['./modal-create-new-question.component.scss']
})
export class ModalCreateNewQuestionComponent implements OnInit {
  newQuestionForm = this.fb.group({
    title: ['', Validators.required],
    request: ['', Validators.required],
    tags: [[]]
  });

  loading: boolean = false;

  @Output() addSuccess: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public modal: NgbActiveModal,
    private fb: FormBuilder,
    private forumService: ForumService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * on add new question
   */
  onAdd() {
    this.loading = true;
    // TODO: remove this, slug to be assigned by backend
    const newQuestion = {
      title: this.newQuestionForm.value.title,
      question: this.newQuestionForm.value.request,
      tags: this.newQuestionForm.value.tags
    }
    this.forumService.postNewQuestion(newQuestion).subscribe((resp) => {
      this.loading = false;
      this.toastr.success('You created new request');
      this.modal.dismiss();
      this.addSuccess.emit();
    },
      (error) => {
        this.toastr.error('Something went wrong');
      });
  }
}
