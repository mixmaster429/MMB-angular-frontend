import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'mmb-web-app-tools-panel',
  templateUrl: './tools-panel.component.html',
  styleUrls: ['./tools-panel.component.scss']
})
export class ToolsPanelComponent implements OnInit {
  @Input() isAnswering: boolean = false;
  @Input() isAnswerEnabled: boolean = true;
  isCommentsViewOpen: boolean = false;
  Editor = ClassicEditor;

  @Output() upvoteClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() downvoteClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() commentClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() answerClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() followClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() responseClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onUpVote() {
    this.upvoteClicked.emit();
  }

  onDownVote() {
    this.downvoteClicked.emit();
  }

  onComment() {
    this.commentClicked.emit();
  }

  onAnswer() {
    this.answerClicked.emit();
  }

  onResponse() {
    this.responseClicked.emit();
  }
}
