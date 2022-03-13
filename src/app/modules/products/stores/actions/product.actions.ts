import {createAction, props} from '@ngrx/store';
import {Product} from '../models';

export const LOAD_PRODUCT_ACTION = '[Products actions] LoadProducts';
export const SEARCH_PRODUCT_API_ACTION = '[Products actions] SearchProducts';
export const SUCCESS_PRODUCT_API_ACTION = '[Products actions] Search Success';
export const FAILED_PRODUCT_ACTION = '[Products actions] Failed Success';
export const SELECTED_PRODUCT_ID_ACTION = '[Products actions] Select Product ID';
export const SELECTED_PRODUCT_ACTION = '[Products actions] Select Product';

export const LoadProducts = createAction(
  LOAD_PRODUCT_ACTION,
  props<{condition: any}>()
);

export const SearchProducts = createAction(
  SEARCH_PRODUCT_API_ACTION,
  props<{query: string}>()
);

export const SearchSuccess = createAction(
  SUCCESS_PRODUCT_API_ACTION,
  props<{products: Product[]}>()
);

export const SearchFailure = createAction(
  FAILED_PRODUCT_ACTION,
  props<{errorMsg: string}>()
);

export const selectedProductId = createAction(
  SELECTED_PRODUCT_ID_ACTION,
  props<{id: string}>()
);

export const selectedProduct = createAction(
  SELECTED_PRODUCT_ACTION,
  props<{id: string}>()
);
