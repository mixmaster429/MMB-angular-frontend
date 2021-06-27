import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mmb-ui-step-content',
  templateUrl: './step-content.component.html',
  styleUrls: ['./step-content.component.scss']
})
export class StepContentComponent implements OnInit {
  @Input() template;
  @Input() currentStep: number;
  @Input() totalSteps: number;
  @Output() next: EventEmitter<string> = new EventEmitter<string>();
  @Output() prev: EventEmitter<string> = new EventEmitter<string>();
  @Output() confirm: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Next button clicked
   */
  onNext() {
    this.next.emit();
  }

  /**
   * Previous button clicked
   */
  onPrev() {
    this.prev.emit();
  }

  /**
   * Confirm button clicked
   */
  onConfirm() {
    this.confirm.emit();
  }
}