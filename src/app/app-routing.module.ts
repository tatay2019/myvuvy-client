import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullIntroComponent} from './full-intro/full-intro.component';
import {SidenavComponent} from './sidenav/sidenav.component';

const routes: Routes = [{
  path: '',
  component: FullIntroComponent
}, {
  path: 'dashboard',
  component: SidenavComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
