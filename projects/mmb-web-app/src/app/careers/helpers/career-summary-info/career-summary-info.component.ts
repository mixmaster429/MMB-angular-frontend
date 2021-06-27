import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { map } from 'rxjs/operators';
import { Career } from '../../../shared/types/career.model';
import { CareerService } from '../../careers.service';
import { ModalExternalApplyComponent } from '../../modal-external-apply/modal-external-apply.component';

@Component({
  selector: 'mmb-web-app-career-summary-info',
  templateUrl: './career-summary-info.component.html',
  styleUrls: ['./career-summary-info.component.scss']
})
export class CareerSummaryInfoComponent implements OnInit {
  @Input() career: Career;
  slug: string;

  constructor(private careerService: CareerService,
              private toastr: ToastrService,
              private modalService: NgbModal,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.slug = this.route.snapshot.params.slug;
  }
  /**
   * Add career to favorites
   */
  onAddToFavorites(career: Career) {
    this.careerService.addToFavorites(career).subscribe((response) => {
      this.toastr.success('Added to your favourites!', 'Success');
      career.saved = response;
    });
  }

  /**
   * Remove career from favorites
   */
  onRemoveFromFavorites(career: Career) {
    const uuid = career.saved.uuid;
    this.careerService.removeFromFavorites(uuid).subscribe(() => {
      this.toastr.success('Removed from favourites!', 'Success');
      career.saved = false;
    });
  }

  /**
   * User pressed i am interested button
   */
  onExpressInterest() {
    this.careerService.expressInterest(this.career).subscribe((response: any) => {
      this.career.interested = response;
      this.toastr.success('Expressed interest', 'Success');
    });
  }

  /**
   * Remove the interest
   */
  onRemoveInterest() {
    this.careerService.removeInterest(this.career).subscribe((response: any) => {
      this.career.interested = null;
      this.toastr.success('Removed the interest', 'Success');
    });
  }

  onExternalApply() {
    const modalRef = this.modalService.open(ModalExternalApplyComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.orgLogo = this.career.organisation.image_logo_large;
    modalRef.componentInstance.orgName = this.career.organisation.name;
    modalRef.componentInstance.careerId = this.career.id;
    modalRef.componentInstance.redirectUrl = this.career.website_redirect_url;
    modalRef.componentInstance.experienceName = this.career.title;
    modalRef.componentInstance.submitted.subscribe(() => {
      modalRef.dismiss();
      this.careerService.getCareerDetails(this.slug).pipe(
        map((response) => this.career = response)
      ).subscribe();
    });
  }
}
