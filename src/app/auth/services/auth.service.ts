import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RegisterRequestInterface } from './../types/register-request.interface';
import { LoginRequestInterface } from './../types/login-request.interface';
import { CurrentUserInterface } from './../../shared/types/currentUser.interface'
import { environment } from '../../../environments/environment.prod';
import { AuthReponseInterface } from '../types/auth-response.interface';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    getUser(response:AuthReponseInterface):CurrentUserInterface{
        return response.user
    }

    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = `${environment.apiUrl}users`
        return this.httpClient
            .post<AuthReponseInterface>(url, data)
            .pipe(map(this.getUser))
    }

    login(data:LoginRequestInterface):Observable<CurrentUserInterface>{
        const url = `${environment.apiUrl}user/login`
        return this.httpClient
            .post<AuthReponseInterface>(url,data)
            .pipe(map( this.getUser))
    }

}

