import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { InsightRoutingModule } from './insight-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';
import { ItemComponent } from './item/item.component';
import { FeaturedComponent } from './item/featured/featured.component';
import { FeaturedCategoriesComponent } from './helpers/featured-categories/featured-categories.component';
import { PopularPostComponent } from './helpers/popular-post/popular-post.component';
import { PopularTagsComponent } from './helpers/popular-tags/popular-tags.component';
import { BlogCardComponent } from './ui-components/blog-card/blog-card.component';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [ListComponent, ItemComponent, FeaturedComponent, FeaturedCategoriesComponent, PopularPostComponent, PopularTagsComponent, BlogCardComponent],
  imports: [
    CommonModule,
    InsightRoutingModule,
    SharedModule,
    InfiniteScrollModule,
    TimeagoModule
  ]
})
export class InsightModule { }
