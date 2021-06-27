import { OpportunityService } from '../opportunity.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { OPPORTUNITY_TYPES } from '../types/opportunity-types.const';
import { OPPORTUNITY_CATEGORIES } from '../types/opportunity-categories.const';

@Component({
  selector: 'mmb-web-app-modal-create-new-question',
  templateUrl: './modal-create-new-question.component.html',
  styleUrls: ['./modal-create-new-question.component.scss']
})
export class ModalCreateNewQuestionComponent implements OnInit {
  newQuestionForm = this.fb.group({
    request: ['', Validators.required],
    opportunityType: [null, Validators.required],
    opportunityCategory: [null, Validators.required],
    tags: [[]]
  });

  opportunityTypes = OPPORTUNITY_TYPES;
  opportunityCategories = OPPORTUNITY_CATEGORIES;

  @Output() addSuccess: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    public modal: NgbActiveModal,
    private fb: FormBuilder,
    private opportunityService: OpportunityService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * on add new question
   */
  onAdd() {
    const newQuestion = {
      title: this.newQuestionForm.value.request,
      opportunity: this.newQuestionForm.value.request,
      opportunity_type: this.newQuestionForm.value.opportunityType,
      opportunity_category: this.newQuestionForm.value.opportunityCategory
    };

    this.opportunityService.postNewQuestion(newQuestion).subscribe((resp) => {
      this.toastr.success('You have created a new opportunity');
      this.modal.dismiss();
      this.addSuccess.emit();
    },
      (error) => {
        this.toastr.error('Something went wrong');
      }
    );
  }

}
