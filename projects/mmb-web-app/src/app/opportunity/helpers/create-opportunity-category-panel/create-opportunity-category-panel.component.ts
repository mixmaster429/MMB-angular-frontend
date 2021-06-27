import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OPPORTUNITY_TYPES } from '../../types/opportunity-types.const';

@Component({
  selector: 'mmb-web-app-create-opportunity-category-panel',
  templateUrl: './create-opportunity-category-panel.component.html',
  styleUrls: ['./create-opportunity-category-panel.component.scss']
})
export class CreateOpportunityCategoryPanelComponent implements OnInit {
  @Input() form: FormGroup;
  categories: any = OPPORTUNITY_TYPES;
  isOpportunityCardActive: boolean[] = [];

  constructor() { }

  ngOnInit() {
  }


  /**
   * Sets the opportunity category
   * @param category selected category
   */
  setOpportunityCategory(category: { value, viewValue }) {
    let currentValue = this.form.controls['category'].value;
    if (currentValue && currentValue === category.value) {
      // deselect the previously selected option
      this.form.controls['category'].setValue('');
      return;
    }
    // set the new value
    this.form.controls['category'].setValue(category.value);
    this.form.markAsDirty();
  }
}
