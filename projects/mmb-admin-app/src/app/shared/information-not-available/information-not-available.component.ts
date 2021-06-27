import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-admin-app-information-not-available',
  templateUrl: './information-not-available.component.html',
  styleUrls: ['./information-not-available.component.scss']
})
export class InformationNotAvailableComponent implements OnInit {
  @Input() heading: string;
  constructor() { }

  ngOnInit() {
  }

}
