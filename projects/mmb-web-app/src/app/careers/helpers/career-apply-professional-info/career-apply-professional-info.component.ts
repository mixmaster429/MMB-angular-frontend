import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mmb-web-app-career-apply-professional-info',
  templateUrl: './career-apply-professional-info.component.html',
  styleUrls: ['./career-apply-professional-info.component.scss']
})
export class CareerApplyProfessionalInfoComponent implements OnInit {
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
