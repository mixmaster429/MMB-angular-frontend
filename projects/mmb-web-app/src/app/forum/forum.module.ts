import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { ForumRoutingModule } from './forum-routing.module';
import { FeedComponent } from './feed/feed.component';
import { ForumService } from './forum.service';
import { SharedModule } from '../shared/shared.module';
import { RequestDetailsComponent } from './request-details/request-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalCreateNewQuestionComponent } from './modal-create-new-question/modal-create-new-question.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { TagInputModule } from 'ngx-chips';
import { ModalCreateNewResponseComponent } from './modal-create-new-response/modal-create-new-response.component';
import { ManagementComponent } from './management/management.component';
import { NgbTabsetModule } from '@ng-bootstrap/ng-bootstrap';
import { RequestsComponent } from './management/requests/requests.component';
import { ManagementToolsComponent } from './management/management-tools/management-tools.component';
import { ResponsesComponent } from './management/responses/responses.component';
import { ResponseReplyToolsComponent } from './management/response-reply-tools/response-reply-tools.component';
import { FeaturedCategoriesComponent } from './helpers/featured-categories/featured-categories.component';
import { PopularPostComponent } from './helpers/popular-post/popular-post.component';
import { PopularTagsComponent } from './helpers/popular-tags/popular-tags.component';
import { ModalCreateNewAnswerComponent } from './modal-create-new-answer/modal-create-new-answer.component';
import { TimeagoModule } from 'ngx-timeago';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForumBookmarkComponent } from './helpers/forum-bookmark/forum-bookmark.component';

/**
 * Forum module
 */
@NgModule({
  declarations: [FeedComponent, RequestDetailsComponent, ModalCreateNewQuestionComponent, ModalCreateNewResponseComponent, ManagementComponent, RequestsComponent, ManagementToolsComponent, ResponsesComponent, ResponseReplyToolsComponent, FeaturedCategoriesComponent, PopularPostComponent, PopularTagsComponent, ModalCreateNewAnswerComponent, ForumBookmarkComponent],
  imports: [
    CommonModule,
    SharedModule,
    ForumRoutingModule,
    CKEditorModule,
    InfiniteScrollModule,
    ReactiveFormsModule,
    FormsModule,
    ColorPickerModule,
    TagInputModule,
    NgbTabsetModule,
    TimeagoModule,
    FlexLayoutModule
  ],
  entryComponents: [ModalCreateNewQuestionComponent, ModalCreateNewResponseComponent, ModalCreateNewAnswerComponent],
  providers: [ForumService]
})
export class ForumModule { }
