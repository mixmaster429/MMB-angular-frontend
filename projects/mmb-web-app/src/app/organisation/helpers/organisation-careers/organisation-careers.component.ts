import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { Career } from '../../../shared/types/career.model';
import { OrganisationService } from '../../organisation.service';
import { Organisation } from '../../types/organisation.model';

@Component({
  selector: 'mmb-web-app-organisation-careers',
  templateUrl: './organisation-careers.component.html',
  styleUrls: ['./organisation-careers.component.scss']
})
export class OrganisationCareersComponent implements OnInit {
  @Input() organisation: Organisation;
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(15);
  careers: Career[] = [];
  nextItems$: Observable<Career[]>;
  isLoading: boolean = true;
  constructor(private orgService: OrganisationService) { }

  ngOnInit() {
    this.offset.next(0);
    this.getOrgCareers();

    // When offset is changed, update the nextitems to be buffered
    combineLatest(this.offset).subscribe(() => {
      if (this.offset.value !== 0) {
        this.isLoading = true;
        this.getOrgCareers();
      }
    });
  }

  /**
   * Get organisation careers
   */
  getOrgCareers() {
    this.orgService.getOrganisationCareers(this.offset.value, this.limit.value, this.organisation.uuid).subscribe((response: any) => {
      this.careers.push(...response);
      this.isLoading = false;
    })
  }

  /**
   * Scroll event from infinite scroll api
   */
  onScroll() {
    // Trigger next set of data load
    this.offset.next(this.offset.value + this.limit.value);
  }

  /**
   * Add to favorites
   * @param career career
   */
  onAddToFavorites(career: Career) {

  }

  /**
   * Remove from favorites
   * @param career career
   */
  onRemoveFromFavorites(career: Career) {

  }

  /**
   * Express interest
   * @param career career
   */
  onExpressInterest(career: Career) {

  }
}
