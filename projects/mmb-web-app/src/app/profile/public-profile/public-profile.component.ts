import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../types/helpers/skill.model';
import { ProfileService } from '../profile.service';
import { Language } from '../types/helpers/language.model';
import { User } from '../types/user.model';

@Component({
  selector: 'mmb-web-app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {
  user: Observable<User> = this.profileService.getUserProfile();
  skills: Observable<Skill> = this.profileService.getUserSkills();
  languages: Observable<Language> = this.profileService.getUserLanguages();
  
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

}
