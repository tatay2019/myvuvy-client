import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidebarComponent} from './sidebar/sidebar.component';

const routes: Routes = [{
  path: 'test',
  component: SidebarComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
