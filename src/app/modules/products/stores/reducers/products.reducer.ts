import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import {SearchSuccess, selectedProduct, selectedProductId} from './../actions';
import {Product} from '@app/modules/products/stores/models';

export interface State extends EntityState<Product> {
  selectProductId : string | null;
}

export const adapter: EntityAdapter<Product> = createEntityAdapter<Product>({
  selectId: (product: Product) => product.id,
  sortComparer: false,
  }
);

export const initialState: State = adapter.getInitialState({
  selectProductId: null,
});

export const reducer = createReducer(
  initialState,
  on(SearchSuccess, (state, {products})=> {
    return adapter.addMany(products, state)
  }),
  on(selectedProductId, (state, {id})=> {
    return {...state, selectProductId: id}
  }),
);

export const getSelectId = (state: State) => state.selectProductId;
