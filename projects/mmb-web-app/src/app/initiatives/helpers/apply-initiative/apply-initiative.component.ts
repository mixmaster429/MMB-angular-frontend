import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Initiative } from '../../types/initiative.model';
import { ToastrService } from 'ngx-toastr';
import { InitiativesService } from '../../initiatives.service';

@Component({
  selector: 'mmb-web-app-apply-initiative',
  templateUrl: './apply-initiative.component.html',
  styleUrls: ['./apply-initiative.component.scss']
})
export class ApplyInitiativeComponent implements OnInit {
  @Input() selectedInitiativeDetails: Initiative;
  @Output() externalApply: EventEmitter<Initiative> = new EventEmitter<Initiative>();
  constructor(private toastr: ToastrService, private initiativeService: InitiativesService) { }

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
    this.initiativeService.onReactionUpdated(this.selectedInitiativeDetails, ev);
  }

  /**
   * Post a new comment
   * @param comment added comment
   * @param request request
   */
  onCommentAdded(comment: string) {
    this.initiativeService.onCommentAdded(this.selectedInitiativeDetails, comment);
  }

  /**
   * User pressed i am interested button
   */
  onExpressInterest() {
    this.initiativeService.expressInterest(this.selectedInitiativeDetails).subscribe((response: any) => {
      this.selectedInitiativeDetails.interested.interested = response;
      this.toastr.success('Expressed interest', 'Success');
    });
  }

  /**
   * Remove the interest
   */
  onRemoveInterest() {
    this.initiativeService.removeInterest(this.selectedInitiativeDetails).subscribe((response: any) => {
      this.selectedInitiativeDetails.interested.interested = null;
      this.toastr.success('Removed the interest', 'Success');
    });
  }
}
