import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home/home.component';
import { HeroComponent } from './home/hero/hero.component';
import { SkillsComponent } from './home/skills/skills.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SkillIconComponent } from './home/skills/skill-icon/skill-icon.component';
import { SkillInfoComponent } from './home/skill-info/skill-info.component';


@NgModule({
  declarations: [HomeComponent, HeroComponent, SkillsComponent, SkillIconComponent, SkillInfoComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class PagesModule {
}
