import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mmb-web-app-profile-intro',
  templateUrl: './profile-intro.component.html',
  styleUrls: ['./profile-intro.component.scss']
})
export class ProfileIntroComponent implements OnInit {
  @Input() image: string;
  @Input() title: string;
  @Input() subheading: string;
  @Input() description: string;
  @Input() linkedin: string;
  @Input() twitter: string;


  constructor() { }

  ngOnInit() {
  }

}
