import { Component, OnInit, Input } from '@angular/core';
import { STAGES } from '../../applications-simplified/application-details/helpers/types/stages.const';
import { SUITABILITY_PROFILE } from '../../applications-simplified/application-details/helpers/types/suitability_profile.const';

@Component({
  selector: 'mmb-org-app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.scss']
})
export class FeedbacksComponent implements OnInit {
  @Input() feedbacks = [];
  isAddFeedbackEnabled: boolean = false;
  feedbackTableColumns: string[] = ['avatar', 'stage', 'suitability', 'feedback'];

  constructor() { }

  ngOnInit() {
  }

  /**
   * Maps stages type from number
   * @param type value
   */
  getStage(type: number | undefined) {
    if (type !== undefined) {
      return STAGES.filter((item) => {
        if (item.value === type.toString()) {
          return item.viewValue;
        }
      });
    }
  }

  /**
   * Maps sutability profile type from number
   * @param type value
   */
  getSuitability(type: number | undefined) {
    if (type !== undefined) {
      return SUITABILITY_PROFILE.filter((item) => {
        if (item.value === type.toString()) {
          return item.viewValue;
        }
      });
    }
  }
}
