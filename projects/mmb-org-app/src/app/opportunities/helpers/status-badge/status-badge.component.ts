import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-org-app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent implements OnInit {
  @Input() status: string;
  constructor() { }

  ngOnInit() {
  }

}
