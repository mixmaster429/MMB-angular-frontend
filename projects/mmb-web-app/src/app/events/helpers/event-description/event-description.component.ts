import { Component, Input, OnInit } from '@angular/core';
import { MmbEvent } from '../../types/event.model';

@Component({
  selector: 'mmb-web-app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.scss']
})
export class EventDescriptionComponent implements OnInit {
  @Input() event: MmbEvent;
  constructor() { }

  ngOnInit() {
  }

}
