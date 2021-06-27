import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { TimeagoModule } from 'ngx-timeago';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserItemGeneratorComponent } from './helpers/user-item-generator/user-item-generator.component';
import { ModalCreatePostComponent } from './helpers/modal-create-post/modal-create-post.component';
import { CreateArticleComponent } from './helpers/create-article/create-article.component';
import { MediumEditorModule } from 'angular2-medium-editor'
import { ModalCreateNewQuestionComponent } from '../forum/modal-create-new-question/modal-create-new-question.component';
import { ModalCreateNewQuestionComponent as ModalCreateNewOpportunityComponent } from '../opportunity/modal-create-new-question/modal-create-new-question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedItemComponent } from './helpers/initiative-item/initiative-item.component';
import { ArticleItemComponent } from './helpers/article-item/article-item.component';
import { PostItemComponent } from './helpers/post-item/post-item.component';
import { EventItemComponent } from './helpers/event-item/event-item.component';
import { CareerItemComponent } from './helpers/career-item/career-item.component';
import { OpportunityItemComponent } from './helpers/opportunity-item/opportunity-item.component';
import { ForumAnswerItemComponent } from './helpers/forum-answer-item/forum-answer-item.component';
import { ForumQuestionItemComponent } from './helpers/forum-question-item/forum-question-item.component';

@NgModule({
  declarations: [HomeComponent, UserItemGeneratorComponent, ModalCreatePostComponent, CreateArticleComponent, FeedItemComponent, ArticleItemComponent, PostItemComponent, EventItemComponent, CareerItemComponent, OpportunityItemComponent, ForumAnswerItemComponent, ForumQuestionItemComponent],
  imports: [
    CommonModule,
    FeedRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    TimeagoModule,
    FlexLayoutModule,
    MediumEditorModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTooltipModule
  ],
  entryComponents:[ModalCreateNewQuestionComponent, ModalCreateNewOpportunityComponent, ModalCreatePostComponent]
})
export class FeedModule { }
