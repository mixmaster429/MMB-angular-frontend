import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mmb-web-app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  // TODO: Replace the below hardcoded image from the API, once API is ready
  image: string = 'https://media.licdn.com/dms/image/C4D03AQEMWwBudH5Law/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=ZlxueGkAVaMH3-aP2yvzNAA70_uCRXZJh2agl6OUKOo';

  constructor() { }

  ngOnInit() {
  }

}
