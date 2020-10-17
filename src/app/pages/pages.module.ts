import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './home/skills/skills.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SkillIconComponent} from './home/skills/skill-icon/skill-icon.component';
import {TopicsPageComponent} from './topics-page/topics-page.component';
import {AppRoutingModule} from '../app-routing.module';
import {TopicSectionComponent} from './topics-page/topic-section/topic-section.component';
import {MainCarouselComponent} from './home/main-carousel/main-carousel.component';
import {NewsListComponent} from './home/news-list/news-list.component';
import { FlashNewsComponent } from './home/flash-news/flash-news.component';
import { HotsComponent } from './home/hots/hots.component';
import { GuessYouLikeComponent } from './home/guess-you-like/guess-you-like.component';


@NgModule({
  declarations: [HomeComponent,
    SkillsComponent,
    SkillIconComponent,
    TopicsPageComponent,
    TopicSectionComponent,
    MainCarouselComponent,
    NewsListComponent,
    FlashNewsComponent,
    HotsComponent,
    GuessYouLikeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    AppRoutingModule
  ]
})
export class PagesModule {
}
