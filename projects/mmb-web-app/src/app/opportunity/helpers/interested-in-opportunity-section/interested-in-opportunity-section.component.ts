import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OpportunityService } from '../../opportunity.service';
import { Opportunity } from '../../types/opportunity.model';

@Component({
  selector: 'mmb-web-app-interested-in-opportunity-section',
  templateUrl: './interested-in-opportunity-section.component.html',
  styleUrls: ['./interested-in-opportunity-section.component.scss']
})
export class InterestedInOpportunitySectionComponent implements OnInit {
  @Input() opportunity: Opportunity;

  constructor(private opportunityService: OpportunityService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * User pressed i am interested button
   */
  onExpressInterest() {
    this.opportunityService.expressInterest(this.opportunity).subscribe((response: any) => {
      this.opportunity.interested = response;
      this.toastr.success('Expressed interest', 'Success');
    });
  }

  /**
   * Remove the interest
   */
  onRemoveInterest() {
    this.opportunityService.removeInterest(this.opportunity).subscribe((response: any) => {
      this.opportunity.interested = null;
      this.toastr.success('Removed the interest', 'Success');
    });
  }

}
