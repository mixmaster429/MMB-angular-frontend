import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OpportunityService } from '../../opportunity.service';
import { Opportunity } from '../../types/opportunity.model';

@Component({
	selector: 'mmb-web-app-similar-opportunities',
	templateUrl: './similar-opportunities.component.html',
	styleUrls: ['./similar-opportunities.component.scss']
})
export class SimilarOpportunitiesComponent implements OnInit {
	@Input() slug: string;
	opportunities$: Observable<Opportunity[]>;

	constructor(private opportunityService: OpportunityService) { }

	ngOnInit() {
		this.opportunities$ = this.opportunityService.getSimilarOpportunities(this.slug);
	}
}
