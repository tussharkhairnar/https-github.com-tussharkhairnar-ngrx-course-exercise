import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../store/actions';
import { AuthService } from '../services/auth.service';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RegisterEffect {
  registre$ = createEffect(() =>
    this.actions.pipe(
      ofType(registerAction),
      switchMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('currentUser', currentUser);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({ errors: errorResponse.error.errors })
            );
          })
        );
      })
    )
  );

  redirectAfterLogin$ = createEffect( ()=>
      this.actions.pipe(
          ofType(registerSuccessAction),
          tap(()=>this.router.navigate(['/']) )
      ),
        // NOTE If forgot to add bellow line it will block hangs you application.
      { dispatch:false }
  )

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router:Router
  ) {}
}
