import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavbarComponent} from './component/navbar/navbar.component';
import {FooterComponent} from './component/footer/footer.component';
import {TopicComponent} from './component/topic/topic.component';
import {HeaderComponent} from './component/header/header.component';
import { HotRowComponent } from './component/hots/hot-row/hot-row.component';
import { ImageComponent } from './component/image/image.component';


@NgModule({
  declarations: [NavbarComponent, FooterComponent, TopicComponent, HeaderComponent, HotRowComponent, ImageComponent],
    exports: [
        NavbarComponent,
        FooterComponent,
        TopicComponent,
        HeaderComponent,
        HotRowComponent,
        ImageComponent
    ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
