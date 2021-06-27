import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MmbWebAppMediaComponent implements OnInit {
  @Input() title: string;
  @Input() text: string;
  @Input() icon: string;

  constructor() { }

  ngOnInit() {
  }

}
