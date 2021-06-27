import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './opportunity-routing.module';
import { FeedComponent } from './feed/feed.component';
import { SharedModule } from '../shared/shared.module';
import { PopularPostComponent } from './helpers/popular-post/popular-post.component';
import { PopularTagsComponent } from './helpers/popular-tags/popular-tags.component';
import { FeaturedCategoriesComponent } from './helpers/featured-categories/featured-categories.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DetailsComponent } from './details/details.component';
import { TagInputModule } from 'ngx-chips';
import { ModalCreateNewQuestionComponent } from './modal-create-new-question/modal-create-new-question.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OpportunityBookmarkComponent } from './helpers/opportunity-bookmark/opportunity-bookmark.component';
import { OpportunitySubNavbarComponent } from './helpers/opportunity-sub-navbar/opportunity-sub-navbar.component';
import { OpportunityCardComponent } from './helpers/opportunity-card/opportunity-card.component';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { OpportunityDetailMetaInfoComponent } from './helpers/opportunity-detail-meta-info/opportunity-detail-meta-info.component';
import { TimeagoModule } from 'ngx-timeago';
import { InterestedInOpportunitySectionComponent } from './helpers/interested-in-opportunity-section/interested-in-opportunity-section.component';
import { CommentsSectionComponent } from './helpers/comments-section/comments-section.component';
import { SimilarOpportunitiesComponent } from './helpers/similar-opportunities/similar-opportunities.component';
import { CreateOpportunityComponent } from './create-opportunity/create-opportunity.component';
import { OpportunityResponsePanelComponent } from './helpers/opportunity-response-panel/opportunity-response-panel.component';
import { OpportunityResponseSubmittedPanelComponent } from './helpers/opportunity-response-submitted-panel/opportunity-response-submitted-panel.component';
import { CreateOpportunityTypePanelComponent } from './helpers/create-opportunity-type-panel/create-opportunity-type-panel.component';
import { CreateOpportunityCategoryPanelComponent } from './helpers/create-opportunity-category-panel/create-opportunity-category-panel.component';
import { CreateOpportunityLocationPanelComponent } from './helpers/create-opportunity-location-panel/create-opportunity-location-panel.component';
import { CreateOpportunityMoreInfoPanelComponent } from './helpers/create-opportunity-more-info-panel/create-opportunity-more-info-panel.component';
import { CreateOpportunityTimeframePanelComponent } from './helpers/create-opportunity-timeframe-panel/create-opportunity-timeframe-panel.component';
import { CreateOpportunityRelevantTagsPanelComponent } from './helpers/create-opportunity-relevant-tags-panel/create-opportunity-relevant-tags-panel.component';

@NgModule({
  declarations: [FeedComponent, FeaturedCategoriesComponent, PopularPostComponent, PopularTagsComponent,
    DetailsComponent, ModalCreateNewQuestionComponent, OpportunityBookmarkComponent, OpportunitySubNavbarComponent,
    OpportunityCardComponent, OpportunityDetailMetaInfoComponent, InterestedInOpportunitySectionComponent, CommentsSectionComponent, SimilarOpportunitiesComponent, CreateOpportunityComponent, OpportunityResponsePanelComponent, OpportunityResponseSubmittedPanelComponent, CreateOpportunityTypePanelComponent, CreateOpportunityCategoryPanelComponent, CreateOpportunityLocationPanelComponent, CreateOpportunityMoreInfoPanelComponent, CreateOpportunityTimeframePanelComponent, CreateOpportunityRelevantTagsPanelComponent],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    TagInputModule,
    ReactiveFormsModule,
    FormsModule,
    ColorPickerModule,
    FlexLayoutModule,
    NgbTooltipModule,
    TimeagoModule,
    NgbModule
  ],
  entryComponents: [ModalCreateNewQuestionComponent],
})
export class OpportunityModule { }
