import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ProductsState, State} from '@app/modules/products/stores/reducers';
import * as fromProducts from './../reducers/products.reducer';
import * as fromSearch from './../reducers/search.reducer';
import {productsStateConfig} from '@app/modules/products/stores';

export const getProductsState = createFeatureSelector<State, ProductsState>(productsStateConfig.stateKey);

export const getProductEntitiesState = createSelector(
  getProductsState,
  state => state.products
);

export const getSelectedProductId = createSelector(
  getProductEntitiesState,
  fromProducts.getSelectId
);


export const {
  selectAll: selectAllProducts,
  selectEntities: selectProductsEntities,
  selectIds: selectProductsIds,
  selectTotal: selectTotalBooks
} = fromProducts.adapter.getSelectors(getProductEntitiesState);


export const getSelectedProduct = createSelector(
  selectProductsEntities,
  getSelectedProductId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const selectProductsCollections = createSelector(
  selectProductsEntities,
  selectProductsIds,
  (entities, ids: string[]) => {
    return ids
      .map(id=> entities[id])
      .filter((product) => product !== undefined);
  }
);


export const getSearchState = createSelector(
  getProductsState,
  (state: ProductsState) => state.search
);

export const getSearchProductsIds = createSelector(
  getSearchState,
  fromSearch.getIds
);

export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);
export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);
export const getSearchError = createSelector(
  getSearchState,
  fromSearch.getError
);
