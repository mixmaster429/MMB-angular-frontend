import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() value: [];
  constructor() { }

  ngOnInit() {
  }

}
