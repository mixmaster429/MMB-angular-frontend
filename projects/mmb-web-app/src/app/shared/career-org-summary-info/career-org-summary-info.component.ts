import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Career } from '../types/career.model';

@Component({
  selector: 'mmb-web-app-career-org-summary-info',
  templateUrl: './career-org-summary-info.component.html',
  styleUrls: ['./career-org-summary-info.component.scss']
})
export class CareerOrgSummaryInfoComponent implements OnInit {
  @Input() careerOrg: Career;
  @Input() image: string;
  @Input() name: string;
  @Input() professionalTitle: string;
  @Input() company: string;
  @Input() type: string;
  @Input() createdOnDate: Date;
  @Input() id: number;
  @Input() isUser: boolean;
  @Input() popoverSummary: string;
  @Input() userUrl: string;
  @Input() orgUrl: string;
  @Input() redirect: string;
  @Input() location: string;
  @Input() isSaved: boolean;

  @Output() bookmark: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() removeBookmark: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Add bookmark
   */
  onBookmark(ev: any) {
    this.bookmark.emit();
    ev.stopPropagation();
  }

  /**
   * Remove bookmark
   */
  onRemoveBookmark(ev: any) {
    this.removeBookmark.emit();
    ev.stopPropagation();
  }
}
