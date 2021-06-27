import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Career } from '../../../shared/types/career.model';
import { CareerService } from '../../careers.service';

@Component({
  selector: 'mmb-web-app-career-apply-org-details',
  templateUrl: './career-apply-org-details.component.html',
  styleUrls: ['./career-apply-org-details.component.scss']
})
export class CareerApplyOrgDetailsComponent implements OnInit {
  @Input() details: Career;
  @Input() applied: boolean;

  constructor(private careerService: CareerService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * User pressed i am interested button
   */
  onExpressInterest() {
    this.careerService.expressInterest(this.details).subscribe((response: any) => {
      this.details.interested = response;
      this.toastr.success('Expressed interest', 'Success');
    });
  }

  /**
   * Remove the interest
   */
  onRemoveInterest() {
    this.careerService.removeInterest(this.details).subscribe((response: any) => {
      this.details.interested = null;
      this.toastr.success('Removed the interest', 'Success');
    });
  }

}
