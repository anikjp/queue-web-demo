import * as fromCarts from './carts.reducers';
import * as fromSearch from './search.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {cartsStateConfig} from '@app/modules/cart/stores';

export interface CartsState {
  search: fromSearch.State;
  carts: fromCarts.State;
}

export interface State  {
  [cartsStateConfig.stateKey]: CartsState,
}

export const reducers: ActionReducerMap<CartsState, any> = {
  search: fromSearch.reducer,
  carts: fromCarts.reducer
};
