import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateNewQuestionComponent } from '../../../forum/modal-create-new-question/modal-create-new-question.component';
import { ModalCreateNewQuestionComponent as ModalCreateNewOpportunityComponent } from '../../../opportunity/modal-create-new-question/modal-create-new-question.component';
import { ToastrService } from 'ngx-toastr';
import { ModalCreatePostComponent } from '../modal-create-post/modal-create-post.component';

@Component({
  selector: 'mmb-web-app-user-item-generator',
  templateUrl: './user-item-generator.component.html',
  styleUrls: ['./user-item-generator.component.scss']
})
export class UserItemGeneratorComponent implements OnInit {

  constructor(private modalService: NgbModal, private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * Open create post modal
   */
  onCreatePost() {
    const modalRef = this.modalService.open(ModalCreatePostComponent, { centered: true });
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      modalRef.dismiss();
    }, (err) => {
      this.toastr.error('Some error occurred while creating the post', 'Error');
    })
  }

  /**
   * Open create opportunity modal
   */
  onCreateOpportunity() {
    const modalRef = this.modalService.open(ModalCreateNewOpportunityComponent, { centered: true });
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.toastr.success('Created the opportunity.', 'Success');
      modalRef.dismiss();
    }, (err) => {
      this.toastr.error('Some error occurred while creating the opportunity', 'Error');
    })
  }

  /**
   * Open create question modal
   */
  onCreateQuestion() {
    const modalRef = this.modalService.open(ModalCreateNewQuestionComponent, { centered: true });
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.toastr.success('Created the question.', 'Success');
      modalRef.dismiss();
    }, (err) => {
      this.toastr.error('Some error occurred while creating the question', 'Error');
    })
  }
}
