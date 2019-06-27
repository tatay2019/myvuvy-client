import { Component, OnInit } from '@angular/core';
import {CoursService} from '../services/cours.service';
import {ActivatedRoute} from '@angular/router';
import {Cours} from '../models/Cours';
import {LoginComponent} from '../login/login.component';
import {MatDialog} from '@angular/material';
import {AddVideoComponent} from '../add-video/add-video.component';
import {User} from '../models/User';

@Component({
  selector: 'app-my-videos',
  templateUrl: './my-videos.component.html',
  styleUrls: ['./my-videos.component.css']
})
export class MyVideosComponent implements OnInit {

  constructor(private service: CoursService, private actR: ActivatedRoute, private dialog: MatDialog) { }
  cours: Cours;
  user: User;
  isTheFormatter = false;
  ngOnInit() {
    this.user = JSON.parse(localStorage.user);
    this.service.read(this.actR.snapshot.params.id).subscribe(r => {this.cours = r; this.isTheFormatter = this.user.id === this.cours.publisher.id} );
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddVideoComponent, {
      width: '400px',
      data: {id: this.actR.snapshot.params.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}
