import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {TopicComponent} from './component/topic/topic.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, TopicComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    TopicComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
