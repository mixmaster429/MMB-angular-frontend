import { Component, Input, OnInit } from '@angular/core';
import { CareerService } from '../../../careers/careers.service';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-career-item',
  templateUrl: './career-item.component.html',
  styleUrls: ['./career-item.component.scss']
})
export class CareerItemComponent implements OnInit {
  @Input() feed;

  constructor(private careerService: CareerService) { }

  ngOnInit() {
  }

  /**
   * Reaction updated for careers
   */
  onCareerReactionUpdated(career: Career, ev) {
    this.careerService.onReactionUpdated(career, ev);
  }

  /**
   * Post a new comment for career
   * @param comment added comment
   * @param request request
   */
  onCareerCommentAdded(career: Career, comment: string) {
    this.careerService.onCommentAdded(career, comment);
  }
}
