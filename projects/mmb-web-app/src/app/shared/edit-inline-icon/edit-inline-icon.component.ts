import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mmb-web-app-edit-inline-icon',
  templateUrl: './edit-inline-icon.component.html',
  styleUrls: ['./edit-inline-icon.component.scss']
})
export class EditInlineIconComponent implements OnInit {
  @Output() onEditClicked: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.onEditClicked.emit();
  }
}
