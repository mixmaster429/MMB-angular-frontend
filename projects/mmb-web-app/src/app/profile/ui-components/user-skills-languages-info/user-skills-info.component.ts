import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../types/user.model';
import { AddSkillModalComponent } from '../add-skill-modal/add-skill-modal.component';
import { AddLanguageModalComponent } from '../add-language-modal/add-language-modal.component';
import { Language } from '../../types/helpers/language.model';
import { Skill } from '../../types/helpers/skill.model';
import { ProfileService } from './../../profile.service';

@Component({
  selector: 'mmb-web-app-user-skills',
  templateUrl: './user-skills-info.component.html',
  styleUrls: ['./user-skills-info.component.scss']
})
export class UserSkillsComponent implements OnInit {
  @Input() skills: Skill[];
  @Input() user: User;
  @Input() languages: Language[];
  @Input() isEditMode: boolean;

  constructor(private modalService: NgbModal,
              private profileService: ProfileService) { }

  ngOnInit() {
    this.getSkills();
    this.getLanguages();
  }

  /**
   * Create add skill modal
   */
  onSkillAdd() {
    const modalRef = this.modalService.open(AddSkillModalComponent, { centered: true });
    modalRef.componentInstance.user = this.user;

    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.getSkills();
    });
  }

  /**
   * Create add skill modal
   */
  onSkillEdit(skills: string) {
    const modalRef = this.modalService.open(AddSkillModalComponent, { centered: true });
    modalRef.componentInstance.user = this.user;
    modalRef.componentInstance.isEditMode = true;
    modalRef.componentInstance.skills = skills;
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.getSkills();
    });
  }

  /**
   * Create add language modal
   */
  onLanguageAdd() {
    const modalRef = this.modalService.open(AddLanguageModalComponent, { centered: true });
    modalRef.componentInstance.user = this.user;
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.getLanguages();
    });
  }

  /**
   * Create edit language modal
   */
  onLanguageEdit(languages) {
    const modalRef = this.modalService.open(AddLanguageModalComponent, { centered: true });
    modalRef.componentInstance.user = this.user;
    modalRef.componentInstance.languages = languages;
    modalRef.componentInstance.isEditMode = true;
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.getLanguages();
    });
  }

  getProfile() {
    this.profileService.getUserProfile().subscribe((response) => {
    });
  }

  getSkills() {
    this.profileService.getUserSkills().subscribe((response: any) => {
      this.skills = response;
    });
  }

  getLanguages() {
    this.profileService.getUserLanguages().subscribe((response: any) => {
      this.languages = response;
    });
  }

}
