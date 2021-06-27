import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Initiative } from '../../../initiatives/types/initiative.model';
import { OrganisationService } from '../../organisation.service';
import { Organisation } from '../../types/organisation.model';

@Component({
  selector: 'mmb-web-app-organisation-experiences',
  templateUrl: './organisation-experiences.component.html',
  styleUrls: ['./organisation-experiences.component.scss']
})
export class OrganisationExperiencesComponent implements OnInit {

  @Input() organisation: Organisation;
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: number = 15;
  experiences: Initiative[] = [];
  nextItems$: Observable<Initiative[]>;
  isLoading: boolean = true;

  constructor(private orgService: OrganisationService) { }

  ngOnInit() {
    this.offset.next(0);
    this.getOrgExperiences();
    
    // When offset is changed, update the nextitems to be buffered
    combineLatest(this.offset).subscribe(() => {
      if (this.offset.value !== 0) {
        this.isLoading = true;
        this.getOrgExperiences();
      }
    });
  }

  /**
   * Get org experiences
   */
  getOrgExperiences() {
    this.orgService.getOrganisationInitiatives(this.offset.value, this.limit, this.organisation.uuid).subscribe((response: any) => {
      this.experiences.push(...response);
      this.isLoading = false;
    })
  }

  /**
   * Scroll experience from infinite scroll api
   */
  onScroll() {
    // Trigger next set of data load
    this.offset.next(this.offset.value + this.limit);
  }

  /**
   * Add to favorites
   * @param experience experience
   */
  onAddToFavorites(experience: Initiative) {

  }

  /**
   * Remove from favorites
   * @param experience experience
   */
  onRemoveFromFavorites(experience: Initiative) {

  }

  /**
   * Express interest
   * @param experience experience
   */
  onExpressInterest(experience: Initiative) {

  }
}
