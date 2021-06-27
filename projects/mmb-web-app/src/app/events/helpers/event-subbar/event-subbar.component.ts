import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mmb-web-app-event-subbar',
  templateUrl: './event-subbar.component.html',
  styleUrls: ['./event-subbar.component.scss']
})
export class EventSubbarComponent implements OnInit {
  activeTab: number = 1;
  searchInput: string;
  @Output() textSearchUpdated: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Search text added
   */
  onSearchUpdated() {
    this.textSearchUpdated.emit(this.searchInput);
  }
}
