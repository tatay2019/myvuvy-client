import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/User';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService, private snack: MatSnackBar, private router: Router, private ref: MatDialogRef<LoginComponent>) { }

  user: User;
  ngOnInit() {
    this.user = new User();
  }
  login() {
    this.service.login(this.user).subscribe(r => {
      if ( r != null ) {
        // @ts-ignore
        r.password = null;
        localStorage.setItem('user', JSON.stringify(r));
        this.router.navigateByUrl('/dashboard');
        this.ref.close();
      } else {
         this.snack.open('verfy username or password invalid', 'close', {duration: 1000});
      }
    });
  }

}
