import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Career } from '../types/career.model';

@Component({
  selector: 'mmb-web-app-listing-search-card',
  templateUrl: './listing-search-card.component.html',
  styleUrls: ['./listing-search-card.component.scss']
})
export class ListingSearchCardComponent implements OnInit {
  @Input() opportunity: Career;
  @Input() image: string;
  @Input() url: string;
  @Input() title: string;
  @Input() heading: string;
  @Input() description: string;
  @Input() date: string;
  @Input() location: string;
  @Input() author: string;
  @Input() isSelected: boolean;
  @Input() slug: string;
  @Output() itemSelected: EventEmitter<Career> = new EventEmitter<Career>();

  constructor() { }

  ngOnInit() {
  }

  onItemSelected() {
    this.itemSelected.emit(this.opportunity);
  }
}
