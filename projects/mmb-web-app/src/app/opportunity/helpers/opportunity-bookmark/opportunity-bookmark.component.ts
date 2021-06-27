import { Component, OnInit, Input } from '@angular/core';
import { OpportunityService } from '../../opportunity.service';
import { ToastrService } from 'ngx-toastr';
import { Opportunity } from '../../types/opportunity.model';

@Component({
  selector: 'mmb-web-app-opportunity-bookmark',
  templateUrl: './opportunity-bookmark.component.html',
  styleUrls: ['./opportunity-bookmark.component.scss']
})
export class OpportunityBookmarkComponent implements OnInit {
  @Input() request: Opportunity;
  constructor(private opportunityService: OpportunityService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * Add opportunity item to favorites
   */
  onAddToFavorites(opportunity: Opportunity) {
    this.opportunityService.addToFavorites(opportunity).subscribe((response) => {
      this.toastr.success('Added to your favourites!', 'Success');
      opportunity.saved = response;
    });
  }

  /**
   * Remove forum item from favorites
   */
  onRemoveFromFavorites(opportunity: Opportunity) {
    const uuid = opportunity.saved.uuid;
    this.opportunityService.removeFromFavorites(uuid).subscribe(() => {
      this.toastr.success('Removed from favourites!', 'Success');
      opportunity.saved = false;
    });
  }
}
