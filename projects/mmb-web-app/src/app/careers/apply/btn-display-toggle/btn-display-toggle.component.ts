import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-btn-display-toggle',
  templateUrl: './btn-display-toggle.component.html',
  styleUrls: ['./btn-display-toggle.component.scss']
})
export class BtnDisplayToggleComponent implements OnInit {
  isExpanded: boolean;
  @Input() summary: string;
  @Input() description: string;
  
  constructor() { }

  ngOnInit() {
  }

}
