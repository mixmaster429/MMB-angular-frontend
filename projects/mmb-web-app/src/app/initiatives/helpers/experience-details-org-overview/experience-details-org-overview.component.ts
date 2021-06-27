import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InitiativesService } from '../../initiatives.service';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-experience-details-org-overview',
  templateUrl: './experience-details-org-overview.component.html',
  styleUrls: ['./experience-details-org-overview.component.scss']
})
export class ExperienceDetailsOrgOverviewComponent implements OnInit {
  @Input() experience: Initiative;
  experiences: Observable<Initiative[]>;

  constructor(private initiativeService: InitiativesService) { }

  ngOnInit() {
    this.experiences = this.initiativeService.getExperiencesByOrg(this.experience.organisation.uuid);
  }

}
