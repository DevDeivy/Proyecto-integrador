import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private http = inject(HttpClient);

  registerUser( userData: any ): Observable <any> {
    const url = "http://localhost:8080/culti/auth/signup";
    return this.http.post( url, userData);
  };

  loginUser( userData: any ): Observable <any> {
    const url = "http://localhost:8080/culti/auth/signin"
    return this.http.post( url, userData, { responseType: 'text' } );
  };
}
