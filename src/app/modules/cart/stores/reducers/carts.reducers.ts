import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {createReducer, on} from '@ngrx/store';
import {addCart, deleteCart, SearchSuccess, selectedCartId, updateCart} from '@app/modules/cart/stores/actions';
import {Cart} from '@app/modules/cart/stores/models/carts';

export interface State extends EntityState<Cart> {
  selectCartId : string | null;
}

export const adapter: EntityAdapter<Cart> = createEntityAdapter<Cart>({
    selectId: (cart: Cart) => cart.id,
    sortComparer: false,
  }
);

export const initialState: State = adapter.getInitialState({
  selectCartId: null,
});

export const reducer = createReducer(
  initialState,
  on(SearchSuccess, (state, {carts})=> {
    return adapter.addMany(carts, state)
  }),
  on(selectedCartId, (state, {id})=> {
    return {...state, selectCartId: id}
  }),
  on(addCart, (state, {cart})=> {
    return adapter.addOne(cart, state);
  }),
  on(deleteCart, (state, {id})=> {
    return adapter.removeOne(id, state);
  }),
  on(updateCart, (state, {updatedCart})=> {
    return adapter.updateOne(updatedCart, state);
  }),
);

export const getSelectId = (state: State) => state.selectCartId;
