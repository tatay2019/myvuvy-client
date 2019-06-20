import { Component, OnInit } from '@angular/core';
import {CoursService} from '../services/cours.service';
import {CategoriesService} from '../services/categories.service';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Cours} from '../models/Cours';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  my = false;
  uploaded = false;
  courses: [Cours];
  constructor(private coursService: CoursService, private categService: CategoriesService, private userService: UserService, private actr: ActivatedRoute, private router: Router) {
    this.my = router.url.indexOf('/my') > -1;
    this.uploaded = router.url.indexOf('/uploaded') > -1;

  }

  ngOnInit() {
    if (this.my) {
      // @ts-ignore
      this.userService.read(JSON.parse(localStorage.user).id).subscribe(r => this.courses = r.submitedCourses);
    }
    if (this.uploaded) {
      // @ts-ignore
      this.userService.read(JSON.parse(localStorage.user).id).subscribe(r => this.courses = r.courses);
    }
    if ( !this.my && !this.uploaded) {
      // @ts-ignore
      this.coursService.readAll().subscribe(r => this.courses = r);
    }
  }

}
