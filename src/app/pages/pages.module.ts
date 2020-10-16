import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import {HeroComponent} from './home/hero/hero.component';
import {SkillsComponent} from './home/skills/skills.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SkillIconComponent} from './home/skills/skill-icon/skill-icon.component';
import {TopicsPageComponent} from './topics-page/topics-page.component';
import {AppRoutingModule} from '../app-routing.module';
import {TopicSectionComponent} from './topics-page/topic-section/topic-section.component';


@NgModule({
  declarations: [HomeComponent,
    HeroComponent,
    SkillsComponent,
    SkillIconComponent,
    TopicsPageComponent,
    TopicSectionComponent],
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
