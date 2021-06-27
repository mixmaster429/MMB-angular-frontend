import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mmb-web-app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.scss']
})
export class MediaItemComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() startDate: string;
  @Input() endDate: string;
  @Input() location: string;
  @Input() details: string;
  @Input() isEditMode: boolean = true;
  @Output() onEdit: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Emit edit clicked event
   */
  onEditClicked() {
    this.onEdit.emit();
  }
}
