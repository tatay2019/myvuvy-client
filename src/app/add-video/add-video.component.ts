import {Component, Inject, OnInit} from '@angular/core';
import {ResourcesService} from '../services/resources.service';
import {Resource} from '../models/Resource';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Cours} from '../models/Cours';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  constructor(private userService: ResourcesService, @Inject(MAT_DIALOG_DATA) public data, public ref: MatDialogRef<AddVideoComponent>) { }
  file: string;
  fileU: File;
  loader = true;
  resource: Resource;

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
      this.resource.url = r.fileDownloadUri;
      // @ts-ignore
      this.loader = false;
    } , err => this.loader = false);
  }
  add() {
    this.resource.cours = new Cours();
    this.resource.cours.id = this.data.id;
    this.userService.create(this.resource).subscribe(r => this.ref.close());
  }
  ngOnInit() {
    this.resource = new Resource();
  }

}
