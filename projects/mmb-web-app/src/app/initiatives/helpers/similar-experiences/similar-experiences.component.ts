import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InitiativesService } from '../../initiatives.service';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-similar-experiences',
  templateUrl: './similar-experiences.component.html',
  styleUrls: ['./similar-experiences.component.scss']
})
export class SimilarExperiencesComponent implements OnInit {
  @Input() slug: string;
  experiences: Observable<Initiative[]>;

  constructor(private initiativeService: InitiativesService) { }

  ngOnInit() {
    this.experiences = this.initiativeService.getSimilarExperiences(this.slug);
  }
}
