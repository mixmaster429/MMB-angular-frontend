import { Language } from './../types/helpers/language.model';
import { Skill } from './../types/helpers/skill.model';
import { Component, OnInit } from '@angular/core';
import { User } from '../types/user.model';
import { ProfileService } from '../profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'mmb-web-app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  user: Observable<User> = this.profileService.getUserProfile();
  skills: Observable<Skill> = this.profileService.getUserSkills();
  languages: Observable<Language> = this.profileService.getUserLanguages();

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }
}
