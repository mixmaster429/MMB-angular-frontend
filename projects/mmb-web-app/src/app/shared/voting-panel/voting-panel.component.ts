import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mmb-web-app-voting-panel',
  templateUrl: './voting-panel.component.html',
  styleUrls: ['./voting-panel.component.scss']
})
export class VotingPanelComponent implements OnInit {
  @Input() isUpvoteSelected: boolean;
  @Input() isDownvoteSelected: boolean;
  @Input() score: number = 0;
  @Output() upvote: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() downvote: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onUpvoteClicked() {
    this.upvote.emit();
  }

  onDownvoteClicked() {
    this.downvote.emit();
  }
}
