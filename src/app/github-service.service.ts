import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  userName: string
  clientId:"f40879a2ac5fd345874f";
  clientSecret:"f339dd10e7ffb86c6007442d141d2e383dc4c2bd";







constructor(private http: HttpClient) {
    console.log("Working");
    this.userName = 'Bernard2030';
  }

  getdata() {
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }
  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?client_id=" + this.clientId + "&client_secret=" + this.clientSecret)
  }
  updateProfile(useNname: string) {
    this.userName = useNname;
  }
}


