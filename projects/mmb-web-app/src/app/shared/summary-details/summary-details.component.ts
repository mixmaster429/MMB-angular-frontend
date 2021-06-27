import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-summary-details',
  templateUrl: './summary-details.component.html',
  styleUrls: ['./summary-details.component.scss']
})
export class SummaryDetailsComponent implements OnInit {
  private threshold: number = 100;
  _description: string;
  isReadMoreEnabled: boolean = false;
  isReadingMore: boolean = false;
  @Input() title: string;
  @Input() summary: string;
  @Input() 
  set description(val: string) {
    this._description = val;
    // check if description is more than 'threshold' characters, show read more...
    this.checkReadMore();
  }

  constructor() { }

  ngOnInit() {
  }

  /**
   * Displays read more if desccription > 'threshold' value
   */
  checkReadMore() {
    if (this._description && this._description.length > this.threshold) {
      this.isReadMoreEnabled = true;
    }
  }
}
