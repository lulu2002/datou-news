import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaluwanComponent } from './naluwan/naluwan.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [NaluwanComponent],
  exports: [
    NaluwanComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TopicsModule { }
