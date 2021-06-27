import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mmb-web-app-create-opportunity-type-panel',
  templateUrl: './create-opportunity-type-panel.component.html',
  styleUrls: ['./create-opportunity-type-panel.component.scss']
})
export class CreateOpportunityTypePanelComponent implements OnInit {
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Sets opportunity type
   * @param type type value
   */
  setOpportunityType(type: number) {
    this.form.controls['type'].setValue(type);
    this.form.markAsDirty();
  }
}
