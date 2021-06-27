import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mmb-ui-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image: string;
  @Input() coverImage: string;
  @Input() url: string;
  @Input() title: string;
  @Input() heading: string;
  @Input() description: string;
  @Input() date: string;
  @Input() location: string;
  @Input() author: string;
  @Input() isSaved: boolean;
  @Output() addToFavoritesClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() removeFromFavoritesClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit() {
  }

  /**
   * Add to favorites
   */
  onAddToFavorites() {
    this.addToFavoritesClicked.emit();
  }

  /**
   * Remove from favorites
   */
  onRemoveFromFavorites() {
    this.removeFromFavoritesClicked.emit();
  }

}
