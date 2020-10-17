import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './component/navbar/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {TopicComponent} from './component/topic/topic.component';
import {HeaderComponent} from './component/header/header.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, TopicComponent, HeaderComponent],
  exports: [
    NavbarComponent,
    FooterComponent,
    TopicComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
