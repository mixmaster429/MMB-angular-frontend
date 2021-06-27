import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mmb-web-app-experience-subbar',
  templateUrl: './experience-subbar.component.html',
  styleUrls: ['./experience-subbar.component.scss']
})
export class ExperienceSubbarComponent implements OnInit {
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
