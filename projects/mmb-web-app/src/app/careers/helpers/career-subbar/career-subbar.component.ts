import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mmb-web-app-career-subbar',
  templateUrl: './career-subbar.component.html',
  styleUrls: ['./career-subbar.component.scss']
})
export class CareerSubbarComponent implements OnInit {
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
