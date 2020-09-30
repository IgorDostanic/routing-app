import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'my-projects', loadChildren: () => import('./my-projects/my-projects.module').then(m => m.MyProjectsModule) },
{ path: 'about-me', loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
