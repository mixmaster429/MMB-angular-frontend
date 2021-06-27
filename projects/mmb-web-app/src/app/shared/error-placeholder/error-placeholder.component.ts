import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-error-placeholder',
  templateUrl: './error-placeholder.component.html',
  styleUrls: ['./error-placeholder.component.scss']
})
export class ErrorPlaceholderComponent implements OnInit {
  @Input() text: string;
  @Input() title: string;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}
