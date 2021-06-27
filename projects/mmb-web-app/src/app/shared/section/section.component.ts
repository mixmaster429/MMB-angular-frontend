import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
