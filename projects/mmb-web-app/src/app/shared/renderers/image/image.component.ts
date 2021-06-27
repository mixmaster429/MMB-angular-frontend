import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
  @Input() value: string;
  constructor() { }

  ngOnInit() {
  }

}
