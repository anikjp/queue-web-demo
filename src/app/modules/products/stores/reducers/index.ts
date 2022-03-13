import * as fromProducts from './products.reducer';
import * as fromSearch from './search.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {productsStateConfig} from '@app/modules/products/stores';

export interface ProductsState {
  search: fromSearch.State;
  products: fromProducts.State;
}

export interface State  {
  [productsStateConfig.stateKey]: ProductsState,
}

export const reducers: ActionReducerMap<ProductsState, any> = {
  search: fromSearch.reducer,
  products: fromProducts.reducer
};
