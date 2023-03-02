import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, Observable, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Auth } from '../../heroes/interface/auth.interfaces';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.BaseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    return { ...this._auth! };
  }

  constructor(private http: HttpClient) {}

  authVerification(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    return of(true);
  }

  login() {
    return this.http.get<Auth>(`${this.baseUrl}/users/1`).pipe(
      tap((auth) => (this._auth = auth)),
      tap((auth) => localStorage.setItem('id', auth.id))
    );
  }
}
