import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from '../../../events/events.service';
import { MmbEvent } from '../../../events/types/event.model';

@Component({
  selector: 'mmb-web-app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.scss']
})
export class EventItemComponent implements OnInit {

  @Input() feed;

  constructor(private eventService: EventsService) { }

  ngOnInit() {
  }

  /**
   * Reaction updated for events
   */
  onEventReactionUpdated(event: MmbEvent, ev) {
    this.eventService.onReactionUpdated(event, ev);
  }

  /**
   * Post a new comment for event
   * @param comment added comment
   * @param request request
   */
  onEventCommentAdded(event: MmbEvent, comment: string) {
    this.eventService.onCommentAdded(event, comment);
  }

}
