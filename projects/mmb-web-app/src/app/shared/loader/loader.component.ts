import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() loaderContainerClass: string;
  @Input() loaderClass: string;
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
