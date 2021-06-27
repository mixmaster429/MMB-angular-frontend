import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'mmb-web-app-stats-counter',
  templateUrl: './stats-counter.component.html',
  styleUrls: ['./stats-counter.component.scss']
})
export class StatsCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // COUNTERUP ACTIVE CODE - animation
    // $('.counter').counterUp({
    //   delay: 10,
    //   time: 1000
    // });
  }

}
