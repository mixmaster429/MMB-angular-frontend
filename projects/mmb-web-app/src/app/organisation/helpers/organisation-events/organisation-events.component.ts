import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { MmbEvent } from '../../../events/types/event.model';
import { OrganisationService } from '../../organisation.service';
import { Organisation } from '../../types/organisation.model';

@Component({
  selector: 'mmb-web-app-organisation-events',
  templateUrl: './organisation-events.component.html',
  styleUrls: ['./organisation-events.component.scss']
})
export class OrganisationEventsComponent implements OnInit {

  @Input() organisation: Organisation;
  offset: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  limit: BehaviorSubject<number> = new BehaviorSubject<number>(15);
  events: MmbEvent[] = [];
  nextItems$: Observable<MmbEvent[]>;
  isLoading: boolean = true;

  constructor(private orgService: OrganisationService) { }

  ngOnInit() {
    this.offset.next(0);
    this.getOrgEvents();

    // When offset is changed, update the nextitems to be buffered
    combineLatest(this.offset).subscribe(() => {
      if (this.offset.value !== 0) {
        this.isLoading = true;
        this.getOrgEvents();
      }
    });
  }

  getOrgEvents() {
    this.orgService.getOrganisationEvents(this.offset.value, this.limit.value, this.organisation.uuid).subscribe((response: any) => {
      this.events.push(...response);
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
   * @param event event
   */
  onAddToFavorites(event: MmbEvent) {

  }

  /**
   * Remove from favorites
   * @param event event
   */
  onRemoveFromFavorites(event: MmbEvent) {

  }

  /**
   * Express interest
   * @param event event
   */
  onExpressInterest(event: MmbEvent) {

  }
}
