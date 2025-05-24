import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from './rout.api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostUserRegisterService {

  public url: string = Api.PostRegister;
  public urlLogin: string = Api.PostLogin;
  
  constructor(private http: HttpClient) {}

  RegisterUser(payload: any): Observable<any> {
    return this.http.post(this.url, payload);  
  }

  LoginUser(payload: any): Observable<any>{
    return this.http.post(this.urlLogin, payload,{
      responseType: 'text'
    });
  }
}
