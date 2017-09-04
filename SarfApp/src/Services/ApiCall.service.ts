import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { enableProdMode } from '@angular/core';
import { Http } from '@angular/http';

enableProdMode();

/*
  Generated class for the PeopleService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
  interface UserResponse {
    Id: number;
    Sega: string;
  }

@Injectable()
export class ApiCallService {

  constructor(private http: HttpClient) {

  }

 response; 
  getAll(url): Promise<any> {
    return this.http.get(url)
      .toPromise()
      .then(response => this.response = response)
  }


  post(url, body) {
    try {
      var data;
      return new Promise(resolve => {
        this.http.post(url, body)

          .subscribe(data => {
            data = data;
            resolve(data);
          });
      });
    }
    catch (ex) {
      alert(ex);
    }
  }

  put(url, body) {
    try {
      var data;
      return new Promise(resolve => {
        this.http.put(url, body)

          .subscribe(data => {
            data = data;
            resolve(data);
          });
      });
    }
    catch (ex) {
      alert(ex);
    }
  }

  delete(url) {
    try {
      var data;
      return new Promise(resolve => {
        this.http.delete(url)

          .subscribe(data => {
            data = data;
            resolve(data);
          });
      });
    }
    catch (ex) {
      alert(ex);
    }
  }
}
