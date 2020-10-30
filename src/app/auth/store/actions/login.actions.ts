import { createAction, props} from '@ngrx/store'
import { ActionTypes } from '../actionTypes';
import { LoginRequestInterface} from '../../types/login-request.interface';
import { CurrentUserInterface } from '../../../shared/types/currentUser.interface';
import { BackendErrorInterface } from '../../../shared/types/backendErrors.interface';

export const loginAction = createAction(
ActionTypes.Login,
props<{request:LoginRequestInterface}>()    
)

export const loginActionSuccess = createAction(
ActionTypes.Login_SUCCESS,
props<{request:CurrentUserInterface}>()    
)

export const loginActionFailure = createAction(
ActionTypes.Login_FAILURE,
props<{request:BackendErrorInterface}>()
)