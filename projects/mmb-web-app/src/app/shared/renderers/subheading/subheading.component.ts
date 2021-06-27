import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-subheading',
  templateUrl: './subheading.component.html',
  styleUrls: ['./subheading.component.scss']
})
export class SubheadingComponent implements OnInit {
  @Input() value: string;
  constructor() { }

  ngOnInit() {
  }

}
