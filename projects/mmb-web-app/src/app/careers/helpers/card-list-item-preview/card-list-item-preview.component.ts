import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Career } from '../../../shared/types/career.model';

@Component({
  selector: 'mmb-web-app-card-list-item-preview',
  templateUrl: './card-list-item-preview.component.html',
  styleUrls: ['./card-list-item-preview.component.scss']
})
export class CardListItemPreviewComponent implements OnInit {
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
