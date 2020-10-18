import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AppRoutingModule} from '../app-routing.module';
import {MainCarouselComponent} from './home/main-carousel/main-carousel.component';
import {NewsListComponent} from './home/news-list/news-list.component';
import {FlashNewsComponent} from '../shared/component/flash-news/flash-news.component';
import {HotsComponent} from '../shared/component/hots/hots.component';
import {GuessYouLikeComponent} from '../shared/component/guess-you-like/guess-you-like.component';
import {TopicPageComponent} from './topic-page/topic-page.component';
import {YouTubePlayerModule} from "@angular/youtube-player";


@NgModule({
  declarations: [HomeComponent,
    MainCarouselComponent,
    NewsListComponent,
    FlashNewsComponent,
    HotsComponent,
    GuessYouLikeComponent,
    TopicPageComponent],
  exports: [
    HomeComponent,
    FlashNewsComponent,
    HotsComponent,
    GuessYouLikeComponent
  ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        AppRoutingModule,
        YouTubePlayerModule
    ]
})
export class PagesModule {
}
