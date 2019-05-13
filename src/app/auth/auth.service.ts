import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Registraion } from './registraion';
import { Login } from './login';






@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //'https://b55839f4.ngrok.io/'
  ServerUrl  = 'http://localhost:3000/';
  errorData: {};
  public bpost = [];
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private http: HttpClient) { }
  signupForm(formdata: Registraion) {
    return this.http.post<Registraion>(this.ServerUrl + 'users',  formdata, this.httpOptions);
  }

  getblog() {
    return this.http.get(this.ServerUrl + 'blogpost');
  }


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {

      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error.message);
    } else {

      // The backend returned an unsuccessful response code.

      // The response body may contain clues as to what went wrong.

      console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message

    this.errorData = {
      errorTitle: 'Oops! Request for document failed',
      errorDesc: 'Something bad happened. Please try again later.'
    };
    return throwError(this.errorData);
  }
  loginForm(formdata: Login) {
    console.log(formdata);
    return this.http.post<Login>(this.ServerUrl + 'login',  formdata, this.httpOptions);
  }

  postlike(param:any) {
    
    return this.http.post<any>(this.ServerUrl + 'likes',  param, this.httpOptions);
  }

  postdlike(param:any) {
    
    return this.http.post<any>(this.ServerUrl + 'likes',  param, this.httpOptions);
  }
  
}
