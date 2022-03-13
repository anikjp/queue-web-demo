import * as fromRouter from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import * as fromProducts from '@app/modules/products/stores/reducers/products.reducer';
import {environment} from '../environments/environment';

export interface IAppState {
  router: fromRouter.RouterReducerState<any>;
  products: fromProducts.State
}
// all new reducers should be define here
export const reducers: ActionReducerMap<IAppState> = {
  router: fromRouter.routerReducer,
  products: fromProducts.reducer,
};

// console.log all actions
export function logger(
  reducer: ActionReducer<IAppState>,
): ActionReducer<any, any> {
  return (state: IAppState, action: any): IAppState => {
    // console.log('state', state);
    // console.log('action', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [logger]
  : [];
