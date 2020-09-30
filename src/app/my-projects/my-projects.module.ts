import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProjectsRoutingModule } from './my-projects-routing.module';
import { MyProjectsComponent } from './my-projects.component';


@NgModule({
  declarations: [MyProjectsComponent],
  imports: [
    CommonModule,
    MyProjectsRoutingModule
  ]
})
export class MyProjectsModule { }
