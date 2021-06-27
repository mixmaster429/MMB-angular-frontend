import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InitiativesService } from '../../initiatives.service';
import { Initiative } from '../../types/initiative.model';

@Component({
  selector: 'mmb-web-app-suggested-experiences',
  templateUrl: './suggested-experiences.component.html',
  styleUrls: ['./suggested-experiences.component.scss']
})
export class SuggestedExperiencesComponent implements OnInit {
  @Input() slug: string;
  experiences: Observable<Initiative[]>;

  constructor(private initiativeService: InitiativesService) { }

  ngOnInit() {
    this.experiences = this.initiativeService.getSuggestedExperiences();
  }
}
