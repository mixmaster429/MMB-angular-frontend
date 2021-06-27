import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { EventsService } from '../events.service';
import { MmbEvent } from '../types/event.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalRegisterEventComponent } from '../modal-register-event/modal-register-event.component';

@Component({
  selector: 'mmb-web-app-events-details-light',
  templateUrl: './events-details-light.component.html',
  styleUrls: ['./events-details-light.component.scss']
})
export class EventsDetailsLightComponent implements OnInit {
  selectedEventDetails: MmbEvent;
  slug: string;
  constructor(private eventsService: EventsService, private route: ActivatedRoute, 
    private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.route.params.pipe(
      map(p => {
        return { slug: p.slug, query: p.query };
      }),
      tap(request => {
        // User has clicked on an event detail tile
        if (request.slug) {
          this.slug = request.slug;
          this.eventsService.getEventDetails(request.slug).pipe(
            map((response) => this.selectedEventDetails = response)
          ).subscribe();
        }
      })
    ).subscribe();
  }

  /**
   * Listing card clicked
   * @param slug slug of clicked item
   */
  onListingCardClicked(event: MmbEvent) {
    // this.selectedEvent.next(event);
    this.router.navigate([`events/${event.slug}`]);
  }

  /**
   * Return if job is external
   * @param value 
   */
  isExternal(value: string) {
    return value && parseInt(value) > 3;
  }

  /**
   * Register for event
   */
  onExternalApply() {
    const modalRef = this.modalService.open(ModalRegisterEventComponent, { centered: true, size: 'md' });
    modalRef.componentInstance.orgLogo = this.selectedEventDetails.organisation.image_logo_large;
    modalRef.componentInstance.orgName = this.selectedEventDetails.organisation.name;
    modalRef.componentInstance.eventId = this.selectedEventDetails.id;
    modalRef.componentInstance.eventName = this.selectedEventDetails.title;
    modalRef.componentInstance.redirectUrl = this.selectedEventDetails.website_redirect_url;
    modalRef.componentInstance.submitted.subscribe(() => {
      modalRef.dismiss();
      this.eventsService.getEventDetails(this.slug).pipe(
        map((response) => this.selectedEventDetails = response)
      ).subscribe();
    });
  }
}
