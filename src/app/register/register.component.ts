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
  file: string;
  fileU: File;
  loader = false;

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
      this.user.photoUrl = r.fileDownloadUri;
      // @ts-ignore
      this.loader = false;
    } , err => this.loader = false);
  }

  ngOnInit() {
    this.user = new User();
  }

  create() {
    this.userService.create(this.user).subscribe(r => this.dialogRef.close());
  }

}
