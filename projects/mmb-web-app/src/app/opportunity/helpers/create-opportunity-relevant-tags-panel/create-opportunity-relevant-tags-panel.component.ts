import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mmb-web-app-create-opportunity-relevant-tags-panel',
  templateUrl: './create-opportunity-relevant-tags-panel.component.html',
  styleUrls: ['./create-opportunity-relevant-tags-panel.component.scss']
})
export class CreateOpportunityRelevantTagsPanelComponent implements OnInit {
  @Input() form: FormGroup;
  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }


  /**
   * Add tag
   */
  onAddTag() {
    const tag = this.form.controls['tag'].value;
    let tags = this.form.controls['tags'].value;
    if (tags.includes(tag)) {
      this.toastr.error('This tag is already added.', 'Error');
      return;
    }
    tags.push(tag);
    this.form.controls['tag'].setValue('');
  }

  /**
   * Removes the tag
   * @param tag tag value to be removed
   */
  onRemoveTag(tag) {
    let tags = this.form.controls['tags'].value;
    tags.pop(tags.find((item) => item === tag));
  }
}
