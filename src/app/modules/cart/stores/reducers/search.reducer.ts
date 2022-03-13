import {createReducer, on} from '@ngrx/store';
import {SearchFailure, SearchCarts, SearchSuccess, LoadCarts} from '@app/modules/cart/stores/actions';

export interface State {
  ids: string[],
  loading: boolean,
  error: string,
  query: string,
}

const initialState: State = {
  ids: [],
  loading: false,
  error:'',
  query: '',
};

export const reducer = createReducer(
  initialState,
  on(LoadCarts, (state, c)=> {
    return {
      ...state,
      ids: [],
      loading: true,
      error: '',
    }
  }),
  on(SearchCarts, (state, query: any)=> {
    return query === '' ? initialState : {
      ...state,
      loading: true,
      error: '',
      query,
    }
  }),
  on(SearchSuccess, (state, {carts})=> {
    return {
      ids: carts.map(cart=> cart.id),
      loading: false,
      error: '',
      query: state.query,
    }
  }),
  on(SearchFailure, (state, errorMsg: any)=> {
    return {
      ...state,
      error: errorMsg,
      loading: false,
    }
  }),
);


export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;

export const getIds = (state: State) => state.ids;

export const getQuery = (state: State) => state.query;
