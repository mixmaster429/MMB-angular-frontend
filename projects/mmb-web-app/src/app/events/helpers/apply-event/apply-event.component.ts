import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MmbEvent } from '../../types/event.model';
import { ToastrService } from 'ngx-toastr';
import { EventsService } from '../../events.service';

@Component({
  selector: 'mmb-web-app-apply-event',
  templateUrl: './apply-event.component.html',
  styleUrls: ['./apply-event.component.scss']
})
export class ApplyEventComponent implements OnInit {
  @Input() selectedEventDetails: MmbEvent;
  @Output() externalApply: EventEmitter<MmbEvent> = new EventEmitter<MmbEvent>();
  constructor(private toastr: ToastrService, private eventsService: EventsService) { }

  ngOnInit() {
  }

  /**
   * Return if job is external
   * @param value 
   */
  isExternal(value: string) {
    return value && parseInt(value) > 3;
  }

  /**
   * On External application
   */
  onExternalApply() {
    this.externalApply.emit();
  }

  /**
   * Added new reaction
   * @param ev 
   */
  onReactionUpdated(ev) {
    this.eventsService.onReactionUpdated(this.selectedEventDetails, ev);
  }

  /**
   * Post a new comment
   * @param comment added comment
   * @param request request
   */
  onCommentAdded(comment: string) {
    this.eventsService.onCommentAdded(this.selectedEventDetails, comment);
  }

  /**
   * User pressed i am interested button
   */
  onExpressInterest() {
    this.eventsService.expressInterest(this.selectedEventDetails).subscribe((response: any) => {
      this.selectedEventDetails.interested.interested = response;
      this.toastr.success('Expressed interest', 'Success');
    });
  }

  /**
   * Remove the interest
   */
  onRemoveInterest() {
    this.eventsService.removeInterest(this.selectedEventDetails).subscribe((response: any) => {
      this.selectedEventDetails.interested.interested = null;
      this.toastr.success('Removed the interest', 'Success');
    });
  }
}
