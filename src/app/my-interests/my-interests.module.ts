import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInterestsRoutingModule } from './my-interests-routing.module';
import { MyInterestsComponent } from './my-interests.component';


@NgModule({
  declarations: [MyInterestsComponent],
  imports: [
    CommonModule,
    MyInterestsRoutingModule
  ]
})
export class MyInterestsModule { }
