import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INITIATIVE_TYPES } from '../../initiatives/types/initiative-type.enum';
import { Initiative } from '../../initiatives/types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience: Initiative;
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

  /**
   * Maps initiative type from number
   * @param type value
   */
  getInitiativeType(type: number) {
    return INITIATIVE_TYPES.filter((item) => {
      if (item.value == type.toString()) {
        return item.viewValue;
      }
    });
  }
}
