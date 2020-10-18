import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {TopicPageComponent} from './pages/topic-page/topic-page.component';
import {NctuAnswerComponent} from './pages/nctu-answer/nctu-answer.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {
    path: 'topics/:topic',
    component: TopicPageComponent,
    pathMatch: 'prefix'
  },
  {path: 'nctu-answer', component: NctuAnswerComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
