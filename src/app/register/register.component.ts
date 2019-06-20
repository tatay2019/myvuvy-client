import { Component, OnInit } from '@angular/core';
import {User} from '../models/User';
import {UserService} from '../services/user.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User;
  constructor(private userService: UserService, private dialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() {
    this.user = new User();
  }

  create() {
    this.userService.create(this.user).subscribe(r => this.dialogRef.close());
  }

}
