import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: UserService) { }

  user: User;
  ngOnInit() {
    this.user = new User();
  }
  login() {
    this.service.login(this.user).subscribe(r => {
      if ( r != null ) {

      }
    })
  }

}
