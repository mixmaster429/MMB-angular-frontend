import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Opportunity } from '../types/opportunity.model';
import { OpportunitiesService } from '../opportunities.service';

@Component({
  selector: 'mmb-org-app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {
  opportunities = this.opportunitiesService.getOpportunities();
  searchInput;
  constructor(private opportunitiesService: OpportunitiesService) { }

  ngOnInit() {
  }

}
