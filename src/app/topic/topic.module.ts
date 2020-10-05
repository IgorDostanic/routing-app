import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicRoutingModule } from './topic-routing.module';
import { TopicComponent } from './topic.component';
import {DemoMaterialModule} from '../material-module';

@NgModule({
  declarations: [TopicComponent],
  imports: [
    CommonModule,
    TopicRoutingModule,
    DemoMaterialModule,
  ]
})
export class TopicModule { }
