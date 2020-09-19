import { createReducer, on, Action } from '@ngrx/store';
import { AuthStateInterface } from "../types/auth-state.interface";
import { registerAction } from './actions'

const initialState: AuthStateInterface = {
    isSubmitting: false
}
//NOTE: Reducer is a function which will change our state somehow


const authReducer = createReducer(
    initialState, 
    on(registerAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true
    })
    )
)

export function reducers(state:AuthStateInterface, action:Action){
    return authReducer(state,action)
}