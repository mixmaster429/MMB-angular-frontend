import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FeedService } from '../../feed.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'mmb-web-app-modal-create-post',
  templateUrl: './modal-create-post.component.html',
  styleUrls: ['./modal-create-post.component.scss']
})
export class ModalCreatePostComponent implements OnInit {
  @Output() addSuccess: EventEmitter<any> = new EventEmitter<any>();
  user: {
    image: string;
    name: string;
    professionalTitle: string;
  };
  postForm = this.fb.group({
    // title: ['', Validators.required],
    request: ['', Validators.required],
  });

  constructor(
    public modal: NgbActiveModal,
    private fb: FormBuilder,
    private feedService: FeedService,
    private toastrService: ToastrService) { }

  ngOnInit() {
    let user = JSON.parse(<any>localStorage.getItem('user'));
    this.user = {
      image: user.profile_image,
      name: `${user.first_name} ${user.last_name}`,
      professionalTitle: user.credentials ? user.credentials.professional_title : ''
    }
  }

  /**
   * Create the post
   */
  onAdd() {
    let post: string = this.postForm.controls['request'].value;
    if (post.trim() === '') {
      this.toastrService.error('Please enter the post update before proceeding...', 'Error');
      return;
    }
    this.feedService.createPost(post).subscribe(() => {
      this.toastrService.success('Created the post.', 'Success');
      this.addSuccess.emit();
    }, (err) => {
      this.toastrService.error('Some error occured while creating the post', 'Error');
    });
  }
}