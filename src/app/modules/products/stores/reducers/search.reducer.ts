import {createReducer, on} from '@ngrx/store';
import {SearchFailure, SearchProducts, SearchSuccess, LoadProducts} from '@app/modules/products/stores/actions';

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
  on(LoadProducts, (state, c)=> {
    return {
      ...state,
      ids: [],
      loading: true,
      error: '',
    }
  }),
  on(SearchProducts, (state, query: any)=> {
    return query === '' ? initialState : {
      ...state,
      loading: true,
      error: '',
      query,
    }
  }),
  on(SearchSuccess, (state, {products})=> {
    return {
      ids: products.map(product=> product.id),
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
