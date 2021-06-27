import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mmb-org-app-opportunity-filter',
  templateUrl: './opportunity-filter.component.html',
  styleUrls: ['./opportunity-filter.component.scss']
})
export class OpportunityFilterComponent implements OnInit {
  locationFilters: string[];
  statusFilters: string[];
  departmentFilters: string[];
  locationsList: string[] = ['Nigeria', 'London'];
  statusList: string[] = ['Closed', 'Draft', 'Live'];
  departmentList: string[] = ['Software Development', 'Finance', 'HR', 'ICT'];

  constructor() { }

  ngOnInit() {
  }

}
