import { createReducer, on, Action } from '@ngrx/store';

import { AuthStateInterface } from "../types/auth-state.interface";
import { registerAction, registerFailureAction, registerSuccessAction } from './actions/actions'

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser:null,
    isLoggedIn:null,
    ValidationErrors:null
}

//NOTE: Reducer is a function which will change our state somehow
const authReducer = createReducer(
    initialState,
    on( registerAction, (state): AuthStateInterface => ({
        ...state,
        isSubmitting: true
    })
    ),
    on( registerSuccessAction, (state,action):AuthStateInterface=>({
        ...state,
        isSubmitting:false,
        isLoggedIn:true,
        currentUser: action.currentUser
    })),
    on( registerFailureAction, (state,action):AuthStateInterface=>({
        ...state,
        isSubmitting:false,
        isLoggedIn:false,
        ValidationErrors:action.errors
    }))

)


export function reducers(state: AuthStateInterface, action: Action) {
    return authReducer(state, action)
}