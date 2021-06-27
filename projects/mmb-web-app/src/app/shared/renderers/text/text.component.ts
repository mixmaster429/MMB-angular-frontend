import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() value: string;
  constructor() { }

  ngOnInit() {
  }

}
