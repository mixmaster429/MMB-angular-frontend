import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {
  @Input() value: string;
  
  constructor() { }

  ngOnInit() {
  }

}
