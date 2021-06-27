import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mmb-org-app-employee-rating-control',
  templateUrl: './employee-rating-control.component.html',
  styleUrls: ['./employee-rating-control.component.scss']
})
export class EmployeeRatingControlComponent implements OnInit {
  @Input() isMinimalViewActive: boolean;
  @Input() suitability: any;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onValueChanged(item: { value: string }) {
    this.valueChanged.emit(item.value);
  }
}
