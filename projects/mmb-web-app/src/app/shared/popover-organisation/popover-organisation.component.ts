import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OrganisationService } from '../../organisation/organisation.service';
import { UserOrganisationMapper } from '../../organisation/types/user-organisation.model';

@Component({
  selector: 'mmb-web-app-popover-organisation',
  templateUrl: './popover-organisation.component.html',
  styleUrls: ['./popover-organisation.component.scss']
})
export class PopoverOrganisationComponent implements OnInit {
  @Input() id: number;
  @Input() orgImage: string;
  @Input() name: string;
  @Input() summary: string;
  @Input() totalFollowers: number;
  @Input() orgHandle: string;

  userOrgMapper: UserOrganisationMapper;
  constructor(private orgService: OrganisationService, private router: Router) { }

  ngOnInit() {
    // check if user is following org
    this.orgService.getUserFollowedOrganisations().subscribe((response) => {
      if (response) {
        let followedOrgs = response.results;
        let filteredOrg = followedOrgs.filter((item) => item.organisation === this.id);
        this.userOrgMapper = filteredOrg ? filteredOrg[0] : null;
      }
    })
  }

  /**
   * Follow the organisation
   */
  onFollowOrganisation() {
    this.orgService.followOrganisation(this.id).subscribe((response) => {
      this.userOrgMapper = response;
      this.totalFollowers += 1;
    })
  }

 /**
  * Unfollow the organisation
  */
  onUnfollowOrganisation() {
    this.orgService.unfollowOrganisation(this.userOrgMapper.uuid).subscribe((response) => {
      this.userOrgMapper = null;
      this.totalFollowers -= 1;
    });
  }


  onRedirect(orgHandle: string) {
    this.router.navigateByUrl(`/organisation/profile/${orgHandle}`);
  }
}
