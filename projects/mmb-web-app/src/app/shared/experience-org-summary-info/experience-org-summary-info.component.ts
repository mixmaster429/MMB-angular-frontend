import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Initiative } from '../../initiatives/types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-org-summary-info',
  templateUrl: './experience-org-summary-info.component.html',
  styleUrls: ['./experience-org-summary-info.component.scss']
})
export class ExperienceOrgSummaryInfoComponent implements OnInit {
  @Input() slug: string;
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
