import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {
  @Input() value: string;
  constructor() { }

  ngOnInit() {
  }

}
