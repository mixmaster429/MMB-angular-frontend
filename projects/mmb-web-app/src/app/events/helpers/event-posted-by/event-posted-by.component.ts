import { Component, Input, OnInit } from '@angular/core';
import { MmbEvent } from '../../types/event.model';

@Component({
  selector: 'mmb-web-app-event-posted-by',
  templateUrl: './event-posted-by.component.html',
  styleUrls: ['./event-posted-by.component.scss']
})
export class EventPostedByComponent implements OnInit {
  @Input() event: MmbEvent;
  constructor() { }

  ngOnInit() {
  }

}
