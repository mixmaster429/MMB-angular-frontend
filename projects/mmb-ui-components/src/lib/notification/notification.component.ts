import { Component, OnInit } from '@angular/core';

/**
 * Notification component
 */
@Component({
  selector: 'mmb-ui-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  /**
   * Constructor
   */
  constructor() { }

  /**
   * Initialization method - setups the initial variants for notifications
   */
  ngOnInit() {
  }

  /**
   * Sample method to do something
   * @param foo string some string for foo
   * @param bar string some string for bar
   */
  sampleMethod(foo: string, bar: string) {

  }

}
