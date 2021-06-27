import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mmb-web-app-card-separator-border',
  templateUrl: './card-separator-border.component.html',
  styleUrls: ['./card-separator-border.component.scss']
})
export class CardSeparatorBorderComponent implements OnInit {
  separatorClasses: string[] = ['primary', 'success', 'warning', 'danger', 'info'];
  assignedClass: string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Returns random separator class
   */
  getRandomSeparatorClass() {
    if (!this.assignedClass) {
      let randomNum = Math.floor(Math.random() * 5);
      this.assignedClass = `border-bottom--${this.separatorClasses[randomNum]}`;
    }
    return this.assignedClass;
  }
}
