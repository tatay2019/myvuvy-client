import { Component, OnInit } from '@angular/core';
import {CoursService} from '../services/cours.service';
import {CategoriesService} from '../services/categories.service';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Cours} from '../models/Cours';
import {User} from '../models/User';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  my = false;
  uploaded = false;
  courses: [Cours];
  user: User;
  constructor(private coursService: CoursService, private categService: CategoriesService,
              private userService: UserService, private actr: ActivatedRoute, private router: Router, private snack: MatSnackBar) {
    this.my = router.url.indexOf('/my') > -1;
    this.uploaded = router.url.indexOf('/uploaded') > -1;

  }

  enroll(cours) {
    this.user = JSON.parse(localStorage.user);
    this.user.submitedCourses = [cours];
    this.userService.update(this.user).subscribe(r => this.snack.open('done', 'close', {duration: 1000}) );
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
