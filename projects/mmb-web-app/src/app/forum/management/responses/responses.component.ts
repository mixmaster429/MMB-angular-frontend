import { Component, OnInit, Input } from '@angular/core';
import { ResponseProposal } from '../../types/response-proposal.model';
import { ForumService } from '../../forum.service';
import { Observable } from 'rxjs';
import { RequestFeed } from '../../types/request-feed.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mmb-web-app-responses',
  templateUrl: './responses.component.html',
  styleUrls: ['./responses.component.scss']
})
export class ResponsesComponent implements OnInit {
  _selectedRequestId: string;
  @Input() 
  set selectedRequestId(val: string) {
    this._selectedRequestId = val;
    // this.responses = this.forumService.getResponseProposals(val, 1).pipe(
    //   tap(() => {
    //     this.totalResponses = this.forumService.totalProposals.value;
    //   })
    // );
  }

  @Input() selectedRequestDetails: RequestFeed;
  responses: Observable<ResponseProposal[]>;
  totalResponses: number;

  constructor(private forumService: ForumService) { }

  ngOnInit() {
  }

}
