import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Cours} from '../models/Cours';
import {CoursService} from '../services/cours.service';
import {Router} from '@angular/router';
import {User} from '../models/User';
import {Categories} from '../models/Categories';
import {CategoriesService} from '../services/categories.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  constructor(private userService: CoursService, private router: Router, private cats: CategoriesService) { }
  file: string;
  fileU: File;
  loader = false;
  categories: [Categories];
  cours: Cours;

  onFileChange(files: FileList) {
    this.fileU = files.item(0);
    let   reader = new FileReader();
    reader.onload = (event: any) => this.file = event.target.result;
    reader.readAsDataURL(this.fileU);
    this.up();
  }
  up() {
    this.loader = true;
    this.userService.uploadImage(this.fileU).toPromise().then(r => {
      console.log(r);
      // @ts-ignore
      this.cours.image = r.fileDownloadUri;
      // @ts-ignore
      this.loader = false;
    } , err => this.loader = false);
  }
  add() {
    this.cours.publisher = new User();
    this.cours.publisher.id = JSON.parse(localStorage.getItem('user')).id;
    this.userService.create(this.cours).subscribe(r => this.router.navigateByUrl('dashboard/cours/' + r.id));
  }
  ngOnInit() {
  this.cours = new Cours();
  // @ts-ignore
    this.cats.readAll().subscribe(r => this.categories = r);

  }

}
