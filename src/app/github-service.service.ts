import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService {

  constructor(private HttpClient:HttpClient) { }

  // git hub profiles
  public getprofile(searchQuery):Observable<any>{
    let dataUrl = "https://api.github.com/users/${searchQuery}?clientId=${clientId}&clientSecret=${clientSecret}"

    return this.HttpClient.get<any>(dataUrl).pipe(
      retry(count..1)
      catchErrors(this.handleErrors)
      );
  }



  // git hub repos
  public getprofile(searchQuery):Observable<any>[]{
    let dataUrl = "https://api.github.com/users/${searchQuery}?clientId=${clientId}&clientSecret=${clientSecret}"

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

