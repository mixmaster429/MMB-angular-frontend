import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-ui-inline-loader',
  templateUrl: './inline-loader.component.html',
  styleUrls: ['./inline-loader.component.scss']
})
export class InlineLoaderComponent implements OnInit {
  @Input() text: string;
  constructor() { }

  ngOnInit() {
  }

}
