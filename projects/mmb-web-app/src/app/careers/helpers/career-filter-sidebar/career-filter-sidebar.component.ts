import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mmb-web-app-career-filter-sidebar',
  templateUrl: './career-filter-sidebar.component.html',
  styleUrls: ['./career-filter-sidebar.component.scss']
})
export class CareerFilterSidebarComponent implements OnInit {
  // TODO: Load from API
  applicationsOptions = [{
    text: 'All',
    value: 765,
    isChecked: true
  }, {
    text: 'Newest',
    value: 82,
    isSubFilter: true,
    isChecked: true
  }, {
    text: 'Personalised',
    value: 4,
    isSubFilter: true,
    isChecked: true
  }, {
    text: 'MMB Preferred',
    value: 16,
    isSubFilter: true,
    isChecked: true
  }];

  // TODO: Load from API
  seniorityOptions = [{
    text: 'Executive',
    value: 32,
    // isChecked: true
  }, {
    text: 'Senior',
    value: 26,
    isChecked: true
  }, {
    text: 'Middle',
    value: 13,
    isChecked: true
  }, {
    text: 'Junior',
    value: 8,
    // isChecked: true
  }];

  // TODO: Load from API
  contractTypes = [{
    text: 'Full Time',
    value: 32,
    isChecked: true
  }, {
    text: 'Part Time',
    value: 26,
    // isChecked: true
  }, {
    text: 'Contract',
    value: 13,
    isChecked: true
  }, {
    text: 'Freelance',
    value: 22,
    // isChecked: true
  }, {
    text: 'Advisor',
    value: 31,
    isChecked: true
  }, {
    text: 'Internship',
    value: 18,
    // isChecked: true
  }, {
    text: 'Volunteer',
    value: 8,
    // isChecked: true
  }];

  constructor() { }

  ngOnInit() {
  }

}
