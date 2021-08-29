import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  userName: string
  clientId:"f40879a2ac5fd345874f";
  clientSecret:"f339dd10e7ffb86c6007442d141d2e383dc4c2bd";

  constructor(private http:HttpClient) {
    this.userName = ""
  }

  // git hub profiles
getdata() {
    return this.http.get("https://api.github.com/users/" + this.userName + "?client_id=" + this.clientId + "&client_secret=" + this.clientSecret);
  }


  // git hub repos
  getProfile():Observable<any>[]{
    let dataUrl = "https://api.github.com/users/${}?clientId=${clientId}&clientSecret=${clientSecret}"

    return this.HttpClient.get<any>[](dataUrl).pipe(
      retry(count..1)
      catchErrors(this.handleErrors)
      );
  }
  public handleErrors(errors:HttpErrorResponse){
    let errorMessage:string;
    if (error.error instanceof Error ErrorEvent){
      // client side errors
      errorMessage =`MESSAGE:${error.error.message}`;
    }else{
      // server side errors
      errorMessage = `STATUS:${error.status} MESSAGE:${error.message}`;
    }
    return throwError(errorMessage);
  }
}

