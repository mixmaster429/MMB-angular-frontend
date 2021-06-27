import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Career } from '../../../shared/types/career.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalApplyCareerComponent } from '../../modal-apply-career/modal-apply-career.component';
import { ModalExternalApplyComponent } from '../../modal-external-apply/modal-external-apply.component';
import { CareerService } from '../../careers.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mmb-web-app-apply-career',
  templateUrl: './apply-career.component.html',
  styleUrls: ['./apply-career.component.scss']
})
export class ApplyCareerComponent implements OnInit {
  @Input() selectedCareerDetails: Career;
  @Output() externalApply: EventEmitter<Career> = new EventEmitter<Career>();
  constructor(private modalService: NgbModal,
    private careerService: CareerService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * Return if job is external
   * @param value 
   */
  isJobExternal(value: string) {
    return value && parseInt(value) > 3;
  }

  /**
   * On External application
   */
  onExternalApply() {
    const modalRef = this.modalService.open(ModalExternalApplyComponent, { centered: true, size: 'lg' });
    modalRef.componentInstance.orgLogo = this.selectedCareerDetails.organisation.image_logo_large;
    modalRef.componentInstance.orgName = this.selectedCareerDetails.organisation.name;
    modalRef.componentInstance.careerId = this.selectedCareerDetails.id;
    modalRef.componentInstance.redirectUrl = this.selectedCareerDetails.website_redirect_url;
  }

  /**
   * Easy apply for the applicable jobs
   */
  onEasyApply() {
    const modalRef = this.modalService.open(ModalApplyCareerComponent, { centered: true, size: 'lg', windowClass: 'apply-modal-container' });
    modalRef.componentInstance.selectedCareerDetails = this.selectedCareerDetails;
    modalRef.componentInstance.applicationSubmitted.subscribe((status: boolean) => {
      this.selectedCareerDetails.applied = {
        created: new Date()
      };
      modalRef.close();
    });
  }

  /**
   * Added new reaction
   * @param ev 
   */
  onReactionUpdated(ev) {
    this.careerService.onReactionUpdated(this.selectedCareerDetails, ev);
  }

  /**
   * Post a new comment
   * @param comment added comment
   * @param request request
   */
  onCommentAdded(comment: string) {
    this.careerService.onCommentAdded(this.selectedCareerDetails, comment);
  }

  /**
   * User pressed i am interested button
   */
  onExpressInterest() {
    this.careerService.expressInterest(this.selectedCareerDetails).subscribe((response: any) => {
      this.selectedCareerDetails.interested.interested = response;
      this.toastr.success('Expressed interest', 'Success');
    });
  }

  /**
   * Remove the interest
   */
  onRemoveInterest() {
    this.careerService.removeInterest(this.selectedCareerDetails).subscribe((response: any) => {
      this.selectedCareerDetails.interested.interested = null;
      this.toastr.success('Removed the interest', 'Success');
    });
  }
}
