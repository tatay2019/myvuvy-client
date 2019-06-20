import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = environment.api + 'users';
  constructor(private http: HttpClient) { }

  create(body): Observable<any> {
    return this.http.post(this.url, body);
  }
  read(id) {
    return this.http.get(this.url + '/' + id);
  }
  readAll(){
    return this.http.get(this.url );

  }
  update(body) {
    return this.http.put(this.url, body);
  }
  delete(id){
    return this.http.delete(this.url + '/' + id);
  }
  // login
  login(body) {
    return this.http.post(this.url + '/auth/login', body);
  }
  public uploadImage(file: File) {
    const fd =  new FormData();
    fd.append('file', file);
    return this.http.post('http://localhost:8080/uploadFile', fd);
  }

}
