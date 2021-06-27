import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-ui-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {
  @Input() icon: string;
  @Input() text: string;
  @Input() status: number;

  constructor() { }

  ngOnInit() {
  }

}
