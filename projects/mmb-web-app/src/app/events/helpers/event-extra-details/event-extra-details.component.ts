import { Component, Input, OnInit } from '@angular/core';
import { EVENT_TYPES } from '../../types/event-types.enum';
import { MmbEvent } from '../../types/event.model';

@Component({
  selector: 'mmb-web-app-event-extra-details',
  templateUrl: './event-extra-details.component.html',
  styleUrls: ['./event-extra-details.component.scss']
})
export class EventExtraDetailsComponent implements OnInit {
  @Input() event: MmbEvent;
  constructor() { }

  ngOnInit() {
  }

  /**
   * Gets event type
   * @param eventType 
   */
  getEventType(eventType: number) {
    return EVENT_TYPES.filter((item) => item.value === eventType.toString());
  }
}
