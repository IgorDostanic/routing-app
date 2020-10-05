import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyInterestsComponent } from './my-interests.component';

const routes: Routes = [{ path: '', component: MyInterestsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyInterestsRoutingModule { }
