import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-icon-summary',
  templateUrl: './icon-summary.component.html',
  styleUrls: ['./icon-summary.component.scss']
})
export class IconSummaryComponent implements OnInit {
  @Input() value: string;
  @Input() icon: string;
  @Input() bgClass: string = 'bg-secondary';

  constructor() { }

  ngOnInit() {
  }

}
