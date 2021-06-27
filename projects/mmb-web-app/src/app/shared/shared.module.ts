import { SharedService } from './shared.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { PromotionBannerComponent } from './promotion-banner/promotion-banner.component';
import { SearchComponent } from './search/search.component';
import { FilterComponent } from './filter/filter.component';
import { MmbUiComponentsModule, LoaderComponent, CardComponent, InlineLoaderComponent, BadgeSeniorityLevelComponent, StepContentComponent, StepComponent } from '@mmb-ui/src/public-api';
import { HttpClientModule } from '@angular/common/http';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ColorPickerModule } from 'ngx-color-picker';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './auth/token.interceptor';
import { SummaryDetailsComponent } from './summary-details/summary-details.component';
import { ProfileIntroComponent } from './profile-intro/profile-intro.component';
import { SectionComponent } from './section/section.component';
import { LogosSectionComponent } from './logos-section/logos-section.component';
import { RouterModule } from '@angular/router';
import { RequestMoreInfoFormComponent } from './request-more-info-form/request-more-info-form.component';
import { MmbWebAppMediaComponent } from './media/media.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { InteractionToolsComponent } from './interaction-tools/interaction-tools.component';
import { NgbModule, NgbActiveModal, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { RelatedItemsListComponent } from './related-items-list/related-items-list.component';
import { ParagraphComponent } from './renderers/paragraph/paragraph.component';
import { EmbedComponent } from './renderers/embed/embed.component';
import { ImageComponent } from './renderers/image/image.component';
import { HeadingComponent } from './renderers/heading/heading.component';
import { TextComponent } from './renderers/text/text.component';
import { InteractionToolsService } from './interaction-tools/interaction-tools.service';
import { CommentViewSimpleComponent } from './interaction-tools/comment-view-simple/comment-view-simple.component';
import { CommentViewDetailComponent } from './interaction-tools/comment-view-detail/comment-view-detail.component';
import { UserSummaryInfoComponent } from './user-summary-info/user-summary-info.component';
import { ItemRendererComponent } from './renderers/item-renderer/item-renderer.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { StatsCounterComponent } from './stats-counter/stats-counter.component';
import { FooterComponent } from './footer/footer.component';
import { PagePromotionBannerComponent } from './page-promotion-banner/page-promotion-banner.component';
import { ListingSearchCardComponent } from './listing-search-card/listing-search-card.component';
import { TimeagoModule } from 'ngx-timeago';
import { TopLevelSearchPanelComponent } from './top-level-search-panel/top-level-search-panel.component';
import { TopLevelFiltersComponent } from './top-level-filters/top-level-filters.component';
import { CardSummaryComponent } from './card-summary/card-summary.component';
import { IconSummaryComponent } from './icon-summary/icon-summary.component';
import { ToolsPanelComponent } from './interaction-tools/tools-panel/tools-panel.component';
import { PlaceholderNoResponsesComponent } from './placeholder-no-responses/placeholder-no-responses.component';
import { FeedCardComponent } from './feed-card/feed-card.component';
// import { AuthService } from '../public/auth.service';
import { LoaderComponent as WebAppLoaderComponent } from './loader/loader.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { ShareButtonsConfig } from 'ngx-sharebuttons';
import { ReactionIconsComponent } from './interaction-tools/reaction-icons/reaction-icons.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { VotingPanelComponent } from './voting-panel/voting-panel.component';
import { ErrorPlaceholderComponent } from './error-placeholder/error-placeholder.component';
import { SubheadingComponent } from './renderers/subheading/subheading.component';
import { CardsComponent } from './renderers/cards/cards.component';
import { PopoverOrganisationComponent } from './popover-organisation/popover-organisation.component';
import { PopoverUserComponent } from './popover-user/popover-user.component';
import { EditInlineIconComponent } from './edit-inline-icon/edit-inline-icon.component';
import { MultiLocationComponent } from './multi-location/multi-location.component';
import { SingleLocationComponent } from './multi-location/helpers/single-location/single-location.component';
import { LocationRegionsComponent } from './location-regions/location-regions.component';
import { InputSearchComponent } from './input-search/input-search.component';
import { CardSeparatorBorderComponent } from './card-separator-border/card-separator-border.component';
import { InterestService } from './interest.service';
import { CardTagsComponent } from './card-tags/card-tags.component';
import { TruncatePipe } from './truncate.pipe';
import { ItemNavigationPanelComponent } from './item-navigation-panel/item-navigation-panel.component';
import { MomentModule } from 'ngx-moment';
import { CareerListingCardComponent } from './career-listing-card/career-listing-card.component';
import { CareerOrgSummaryInfoComponent } from './career-org-summary-info/career-org-summary-info.component';
import { EventCardComponent } from './event-card/event-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';
import { ExperienceOrgSummaryInfoComponent } from './experience-org-summary-info/experience-org-summary-info.component';

const customConfig: ShareButtonsConfig = {
  include: ['facebook', 'twitter', 'linkedin', 'whatsapp', 'email', 'sms'],
  theme: 'modern-light',
}

@NgModule({
  declarations: [NavigationComponent, PromotionBannerComponent, SearchComponent, FilterComponent, SummaryDetailsComponent, ProfileIntroComponent,
    SectionComponent, InteractionToolsComponent, RelatedItemsListComponent, ParagraphComponent, EmbedComponent, ImageComponent, HeadingComponent,
    TextComponent, CommentViewSimpleComponent, CommentViewDetailComponent, UserSummaryInfoComponent, ItemRendererComponent,
    RequestMoreInfoFormComponent, MmbWebAppMediaComponent, LogosSectionComponent, MediaItemComponent, NavbarComponent, WelcomeBannerComponent, StatsCounterComponent,
    FooterComponent, PagePromotionBannerComponent, ListingSearchCardComponent, TopLevelSearchPanelComponent, TopLevelFiltersComponent,
    CardSummaryComponent, IconSummaryComponent, ToolsPanelComponent, PlaceholderNoResponsesComponent, FeedCardComponent, WebAppLoaderComponent, ReactionIconsComponent, 
    VotingPanelComponent, ErrorPlaceholderComponent, SubheadingComponent, CardsComponent, PopoverOrganisationComponent, PopoverUserComponent, EditInlineIconComponent, 
    MultiLocationComponent, SingleLocationComponent, LocationRegionsComponent, InputSearchComponent, CardSeparatorBorderComponent, CardTagsComponent, TruncatePipe, 
    ItemNavigationPanelComponent, CareerListingCardComponent, CareerOrgSummaryInfoComponent, EventCardComponent, ExperienceCardComponent, ExperienceOrgSummaryInfoComponent],
  imports: [
    CommonModule, MmbUiComponentsModule, HttpClientModule, InfiniteScrollModule, RouterModule, CKEditorModule, NgbModule,
    ColorPickerModule, FormsModule, ReactiveFormsModule, TimeagoModule.forRoot(), FlexLayoutModule, NgbDropdownModule,
    ShareButtonsModule.withConfig(customConfig), ShareIconsModule, NgbTooltipModule, NgbPopoverModule, NgbDropdownModule, MomentModule
  ],
  exports: [
    NavigationComponent,
    PromotionBannerComponent,
    SearchComponent,
    FilterComponent,
    LoaderComponent,
    CardComponent,
    InlineLoaderComponent,
    BadgeSeniorityLevelComponent,
    SummaryDetailsComponent,
    ProfileIntroComponent,
    SectionComponent,
    RequestMoreInfoFormComponent,
    LogosSectionComponent,
    MmbWebAppMediaComponent,
    InteractionToolsComponent,
    RelatedItemsListComponent,
    ParagraphComponent,
    EmbedComponent,
    ImageComponent,
    HeadingComponent,
    TextComponent,
    CommentViewSimpleComponent,
    CommentViewDetailComponent,
    UserSummaryInfoComponent,
    ItemRendererComponent,
    MediaItemComponent,
    NavbarComponent,
    WelcomeBannerComponent,
    StatsCounterComponent,
    FooterComponent,
    PagePromotionBannerComponent,
    ListingSearchCardComponent,
    FeedCardComponent,
    TopLevelSearchPanelComponent,
    TopLevelFiltersComponent,
    CardSummaryComponent,
    IconSummaryComponent,
    ToolsPanelComponent,
    PlaceholderNoResponsesComponent,
    StepComponent,
    StepContentComponent,
    WebAppLoaderComponent,
    VotingPanelComponent,
    ErrorPlaceholderComponent,
    PopoverOrganisationComponent,
    EditInlineIconComponent,
    MultiLocationComponent,
    LocationRegionsComponent,
    InputSearchComponent,
    CardSeparatorBorderComponent,
    CardTagsComponent,
    TruncatePipe,
    ItemNavigationPanelComponent,
    CareerListingCardComponent,
    CareerOrgSummaryInfoComponent,
    EventCardComponent,
    ExperienceCardComponent,
    ExperienceOrgSummaryInfoComponent
  ],
  providers: [
    SharedService,
    InterestService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    NgbActiveModal,
    InteractionToolsService,
    // AuthService
  ]
})
export class SharedModule { }
