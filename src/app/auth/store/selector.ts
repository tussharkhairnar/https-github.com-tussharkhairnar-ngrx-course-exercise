import  {createFeatureSelector, createSelector} from '@ngrx/store'
import { AppStateInreface } from '../../shared/types/app-state-interface';
import { AuthStateInterface } from '../types/auth-state.interface';

//NOTE auth is feature selector, each global poperty of state is called feature.
export const authFeatureSelector = createFeatureSelector<AppStateInreface, AuthStateInterface>('auth')


export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting )


export const validationErrorSelector = createSelector(
    authFeatureSelector,
    (authState:AuthStateInterface)=>authState.ValidationErrors
)    
