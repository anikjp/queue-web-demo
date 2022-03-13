import {createAction, props, union} from '@ngrx/store';
import {Cart} from '@app/modules/cart/stores/models/carts';
import {Update} from '@ngrx/entity';

export const LOAD_CART_ACTION = '[Cart actions] LoadCARTs';
export const SEARCH_CART_API_ACTION = '[Cart actions] SearchCARTs';
export const SUCCESS_CART_API_ACTION = '[Cart actions] Search Success';
export const FAILED_CART_ACTION = '[Cart actions] Failed Success';
export const SELECTED_CART_ID_ACTION = '[Cart actions] Select CART ID';
export const SELECTED_CART_ACTION = '[Cart actions] Select CART';
export const ADD_CART_ACTION = '[Cart actions] add CART';
export const DELETE_CART_ACTION = '[Cart actions] delete CART';
export const UPDATE_CART_ACTION = '[Cart actions] update CART';

export const LoadCarts = createAction(
  LOAD_CART_ACTION,
  props<{condition: any}>()
);

export const SearchCarts = createAction(
  SEARCH_CART_API_ACTION,
  props<{query: string}>()
);

export const selectedCartId = createAction(
  SELECTED_CART_ID_ACTION,
  props<{id: string}>()
);

export const selectedCart = createAction(
  SELECTED_CART_ACTION,
  props<{id: string}>()
);

export const SearchSuccess = createAction(
  SUCCESS_CART_API_ACTION,
  props<{carts: Cart[]}>()
);

export const SearchFailure = createAction(
  FAILED_CART_ACTION,
  props<{errorMsg: string}>()
);

export const addCart = createAction(
  ADD_CART_ACTION,
  props<{cart: Cart}>()
);

export const deleteCart = createAction(
  DELETE_CART_ACTION,
  props<{id: string}>()
);

export const updateCart = createAction(
  UPDATE_CART_ACTION,
  props<{updatedCart: Update<Cart>}>()
);


const all = union({
  LoadCarts,
  addCart,
  updateCart,
  deleteCart,
  SearchCarts,
  SearchSuccess,
  SearchFailure,
  selectedCart,
  selectedCartId
});
