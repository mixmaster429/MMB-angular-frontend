import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MmbEvent } from '../../events/types/event.model';

@Component({
  selector: 'mmb-web-app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event: MmbEvent;
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
  onAddToFavorites(ev: any) {
    this.addToFavoritesClicked.emit();
    ev.stopPropagation();
  }

  /**
   * Remove from favorites
   */
  onRemoveFromFavorites(ev: any) {
    this.removeFromFavoritesClicked.emit();
    ev.stopPropagation();
  }
}
