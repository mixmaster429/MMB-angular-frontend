import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OpportunityService } from '../../opportunity.service';
import { Opportunity } from '../../types/opportunity.model';

@Component({
  selector: 'mmb-web-app-opportunity-response-panel',
  templateUrl: './opportunity-response-panel.component.html',
  styleUrls: ['./opportunity-response-panel.component.scss']
})
export class OpportunityResponsePanelComponent implements OnInit {
  @Input() opportunity: Opportunity;
  @Output() sendResponse: EventEmitter<any> = new EventEmitter<any>();
  response: string;
  constructor(private opportunityService: OpportunityService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  /**
   * Sends response for the opportunity
   */
  onSendResponse() {
    if (!this.response || this.response.trim() === '') {
      this.toastr.error('Please enter the response', 'Error');
      return;
    }
    this.sendResponse.emit(this.response);
  }
}
