import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventsService } from '../../events.service';
import { MmbEvent } from '../../types/event.model';

@Component({
  selector: 'mmb-web-app-event-summary-info',
  templateUrl: './event-summary-info.component.html',
  styleUrls: ['./event-summary-info.component.scss']
})
export class EventSummaryInfoComponent implements OnInit {
  @Input() event: MmbEvent;
  @Output() register: EventEmitter<any> = new EventEmitter<any>();

  constructor(private eventService: EventsService,
              private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * Register/External application
   */
  onRegister() {
    this.register.emit();
  }

  /**
   * Add career to favorites
   */
  onAddToFavorites(event: MmbEvent) {
    this.eventService.addToFavorites(event).subscribe((response) => {
      this.toastr.success('Added to your favourites!', 'Success');
      event.saved = response;
    });
  }

  /**
   * Remove career from favorites
   */
  onRemoveFromFavorites(event: MmbEvent) {
    const uuid = event.saved.uuid;
    this.eventService.removeFromFavorites(uuid).subscribe(() => {
      this.toastr.success('Removed from favourites!', 'Success');
      event.saved = false;
    });
  }
}
