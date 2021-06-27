import { Initiative } from './../../initiatives/types/initiative.model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators/map';
import { OrganisationService } from '../organisation.service';
import { Organisation } from '../types/organisation.model';
import { UserOrganisationMapper } from '../types/user-organisation.model';
import { ToastrService } from 'ngx-toastr';
import { Career } from '../../shared/types/career.model';
import { CareerService } from '../../careers/careers.service';
import { MmbEvent } from '../../events/types/event.model';
import { EventsService } from '../../events/events.service';
import { InitiativesService } from '../../initiatives/initiatives.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditCompanyInfoComponent } from '../helpers/modal-edit-company-info/modal-edit-company-info.component';
import { LazyLoadingService } from '../../shared/lazy-loading/lazy-loading.service';
import { AVAILABLE_ORG_VIEWS } from '../helpers/organisation-item-selector-panel/organisation-item-selector-panel.component';

@Component({
  selector: 'mmb-web-app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {
  @Input() isAdminProfile: boolean;
  selectedView = AVAILABLE_ORG_VIEWS.CAREER;
  organisationDetails: Organisation;
  userOrgMapper: UserOrganisationMapper;
  isLoading: boolean;

  constructor(private route: ActivatedRoute,
              private orgService: OrganisationService,
              private toastrService: ToastrService,
              private careerService: CareerService,
              private eventsService: EventsService,
              private initiativeService: InitiativesService,
              private modalService: NgbModal,
              private lazyLoadingService: LazyLoadingService) {
    this.route.params.pipe(
      map((params) => {
        if (params.slug) {
          // send api call to load organisation
          this.orgService.getOrganisationDetails(params.slug).subscribe((response) => {
            this.organisationDetails = response;

            // check if user is following org
            this.orgService.getUserFollowedOrganisations().subscribe((response) => {
              if (response) {
                let followedOrgs = response.results;
                let filteredOrg = followedOrgs.filter((item) => item.organisation === this.organisationDetails.id);
                this.userOrgMapper = filteredOrg ? filteredOrg[0] : null;
              }
            })
          }, (err) => {
            this.toastrService.error('Error in loading organanisation details', 'Error');
          })
        }
      })
    ).subscribe();
  }

  ngOnInit() {
  }

  /**
   * Follow the organisation
   */
  onFollowOrganisation() {
    this.orgService.followOrganisation(this.organisationDetails.id).subscribe((response) => {
      this.userOrgMapper = response;
      this.organisationDetails.followers_total += 1;
      this.organisationDetails.followed = response;
    });
  }

 /**
  * Unfollow the organisation
  */
  onUnfollowOrganisation() {
    this.orgService.unfollowOrganisation(this.userOrgMapper.uuid).subscribe((response) => {
      this.userOrgMapper = null;
      this.organisationDetails.followers_total -= 1;
      this.organisationDetails.followed = null;
    });
  }

  /**
   * Reaction updated for careers
   */
  onCareerReactionUpdated(career: Career, ev) {
    this.careerService.onReactionUpdated(career, ev);
  }

  /**
   * Post a new comment for careers
   * @param comment added comment
   * @param request request
   */
  onCareerCommentAdded(career: Career, comment: string) {
    this.careerService.onCommentAdded(career, comment);
  }

  /**
   * Reaction updated for Event
   */
  onEventReactionUpdated(event: MmbEvent, ev) {
    this.eventsService.onReactionUpdated(event, ev);
  }

  /**
   * Post a new comment for Event
   * @param comment added comment
   * @param request request
   */
  onEventCommentAdded(event: MmbEvent, comment: string) {
    this.eventsService.onCommentAdded(event, comment);
  }

  /**
   * Reaction updated for initiative
   */
  onInitiativeReactionUpdated(initiative: Initiative, ev) {
    this.initiativeService.onReactionUpdated(initiative, ev);
  }

  /**
   * Post a new comment for initiative
   * @param comment added comment
   * @param request request
   */
  onInitiativeCommentAdded(initiative: Initiative, comment: string) {
    this.initiativeService.onCommentAdded(initiative, comment);
  }

  /**
   * Edit cover image
   */
  onEditCoverImage() {

  }

  /**
   * Edit company information in modal
   */
  onEditCompanyInfo() {
    const modalRef = this.modalService.open(ModalEditCompanyInfoComponent, { centered: true, size: 'lg' });
  }

  /**
   * Scroll event from infinite scroll api
   */
  onScroll() {
  }

  /**
   * Item selected has been updated
   * Career / Event / Experience
   */
  onSelectedItemUpdated(selectedItem: number) {
    this.selectedView = selectedItem;
  }
}
