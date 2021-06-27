import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCreateNewQuestionComponent } from '../../modal-create-new-question/modal-create-new-question.component';
import { ForumService } from '../../forum.service';
import { RequestFeed } from '../../types/request-feed.model';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'mmb-web-app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  _ownerId: string;
  @Input()
  set ownerId(val: string) {
    this._ownerId = val;
    this.requests = this.forumService.getRequests(this._ownerId).pipe(
      tap((requests) => {
        if (requests && requests[0]) {
          this.selectedRequest = requests[0];
        }
      })
    );
  }

  requests = this.forumService.getRequests(this._ownerId);
  selectedRequest: RequestFeed;

  constructor(private forumService: ForumService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  /**
   * Create new question modal
   */
  onAddNewQuestion() {
    const modalRef = this.modalService.open(ModalCreateNewQuestionComponent, { centered: true });
    modalRef.componentInstance.addSuccess.subscribe((ev) => {
      this.requests = this.forumService.getRequests(this._ownerId);
    })
  }

  /**
   * Selects the new request
   * @param request request item
   */
  onSelectedRequest(request: RequestFeed) {
    this.selectedRequest = request;
  }
}
