import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'mmb-web-app-popover-user',
  templateUrl: './popover-user.component.html',
  styleUrls: ['./popover-user.component.scss']
})
export class PopoverUserComponent implements OnInit {
  @Input() id: number;
  @Input() userImage: string;
  @Input() name: string;
  @Input() summary: string;
  @Input() totalFollowers: number;
  @Input() userHandle: string;
  userMapper;

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  /**
   * Follow the User
   */
  onFollowUser() {
    this.sharedService.followUser(this.id).subscribe((response) => {
      this.userMapper = response;
      this.totalFollowers += 1;
    })
  }

  /**
  * Unfollow the User
  */
  onUnfollowUser() {
    this.sharedService.unfollowUser(this.userMapper.uuid).subscribe((response) => {
      this.userMapper = null;
      this.totalFollowers -= 1;
    })
  }

  onRedirect(userHandle) {
    window.location.href = `/profile/${userHandle}`;
  }
}
