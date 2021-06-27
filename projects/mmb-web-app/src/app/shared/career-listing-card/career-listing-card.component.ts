import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Career } from '../types/career.model';

@Component({
  selector: 'mmb-web-app-career-listing-card',
  templateUrl: './career-listing-card.component.html',
  styleUrls: ['./career-listing-card.component.scss']
})
export class CareerListingCardComponent implements OnInit {
  @Input() career: Career;
  @Output() addBookmark: EventEmitter<any> = new EventEmitter<any>();
  @Output() removeBookmark: EventEmitter<any> = new EventEmitter<any>();
  @Output() expressInterest: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  /**
   * Add bookmark
   */
  onBookmark() {
    this.addBookmark.emit();
  }

  /**
   * Remove bookmark
   */
  onRemoveBookmark() {
    this.removeBookmark.emit();
  }

  /**
   * Express interest
   */
  onExpressInterest() {
    this.expressInterest.emit();
  }
}
