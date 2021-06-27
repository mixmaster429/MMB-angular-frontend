import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mmb-web-app-card-tags',
  templateUrl: './card-tags.component.html',
  styleUrls: ['./card-tags.component.scss']
})
export class CardTagsComponent implements OnInit {
  @Input() items: string[];
  @Input() bgClass: string;

  constructor() { }

  ngOnInit() {
  }

}
