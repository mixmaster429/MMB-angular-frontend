import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-item-renderer',
  templateUrl: './item-renderer.component.html',
  styleUrls: ['./item-renderer.component.scss']
})
export class ItemRendererComponent implements OnInit {
  @Input() type: string;
  @Input() value: {
    large: string;
  };
  constructor() { }

  ngOnInit() {
  }

}
