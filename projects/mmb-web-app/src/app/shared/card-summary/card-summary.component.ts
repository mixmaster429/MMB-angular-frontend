// Core Modules
import { Component, OnInit, Input } from '@angular/core';

// Shared Services
import { SharedService } from '../shared.service';

@Component({
  selector: 'mmb-web-app-card-summary',
  templateUrl: './card-summary.component.html',
  styleUrls: ['./card-summary.component.scss']
})
export class CardSummaryComponent implements OnInit {
  @Input() title: string;
  @Input() slug: string;
  @Input() isDetailsView: boolean;
  @Input() summary: string;
  @Input() description: string;
  @Input() authorName: string;
  @Input() authorImage: string;
  @Input() createdOnDate: Date;
  @Input() authorProfessionalTitle: string;
  @Input() coverImage: string;
  @Input() location: string;
  @Input() type: string;
  @Input() totalComments: number;
  @Input() endDate: string;
  @Input() country: string;
  @Input() cityCustom: string;
  @Input() city: string;

  /**
   * Constructor
   */
  constructor(private sharedService: SharedService) { }

  /**
   * Lifecycle hooks
   */
  ngOnInit() {
  }

  /**
   * Gets time left
   * @param endDate end date
   */
  getTimeLeft() {
    return this.sharedService.getTimeLeft(this.endDate);
  }

  /**
   * Gets location
   */
  get getLocation() {
    return this.sharedService.getLocation(this.country, this.city, this.cityCustom);
  }
}
