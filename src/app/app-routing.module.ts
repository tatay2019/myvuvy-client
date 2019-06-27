import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FullIntroComponent} from './full-intro/full-intro.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {AuthGuard} from './auth.guard';
import {CoursesComponent} from './courses/courses.component';
import {CatalogComponent} from './catalog/catalog.component';
import {AddCourseComponent} from './add-course/add-course.component';
import {MyVideosComponent} from './my-videos/my-videos.component';

const routes: Routes = [{
  path: '',
  component: FullIntroComponent
}, {
  path: 'dashboard',
  component: SidenavComponent,
  canActivate: [AuthGuard],
  children: [{
    path: '',
    component: CoursesComponent
  }, {
    path: 'catalog',
    component: CatalogComponent
  }, {
    path: 'my',
    component: CatalogComponent
  }, {
    path: 'uploaded',
    component: CatalogComponent
  }, {
    path: 'upload',
    component: AddCourseComponent
  }, {
    path: 'cours/:id',
    component: MyVideosComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
