import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RegisterRequestInterface } from './../types/register-request.interface';
import { CurrentUserInterface } from './../../shared/types/currentUser.interface'
import { environment } from '../../../environments/environment.prod';
import { AuthReponseInterface } from '../types/auth-response.interface';
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient) { }

    //TODO : Create effect to make API call
    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = `${environment.apiUrl}users`
        return this.httpClient
            .post<AuthReponseInterface>(url, data)
            .pipe(map((response: AuthReponseInterface) => response.user))
    }


}

