import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-top-level-search-panel',
  templateUrl: './top-level-search-panel.component.html',
  styleUrls: ['./top-level-search-panel.component.scss']
})
export class TopLevelSearchPanelComponent implements OnInit {
  @Input() searchPlaceholder: string;
  @Input() title: string;
  searchInput: string;
  @Output() searchClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSearchClicked() {
    this.searchClicked.emit(this.searchInput);
  }
}
