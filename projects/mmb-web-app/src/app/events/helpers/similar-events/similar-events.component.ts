import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from '../../events.service';
import { MmbEvent } from '../../types/event.model';

@Component({
  selector: 'mmb-web-app-similar-events',
  templateUrl: './similar-events.component.html',
  styleUrls: ['./similar-events.component.scss']
})
export class SimilarEventsComponent implements OnInit {
  @Input() slug: string;
  events: Observable<MmbEvent[]>;

	constructor(private eventsService: EventsService) { }

	ngOnInit() {
		this.events = this.eventsService.getSimilarEvents(this.slug);
	}
}
