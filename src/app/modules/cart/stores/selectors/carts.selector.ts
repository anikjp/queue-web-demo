import {createFeatureSelector, createSelector} from '@ngrx/store';
import {CartsState, State} from '@app/modules/cart/stores/reducers';
import * as fromCarts from '@app/modules/cart/stores/reducers/carts.reducers';
import * as fromSearch from '@app/modules/cart/stores/reducers/search.reducer';
import {cartsStateConfig} from '@app/modules/cart/stores';

export const getCartsState = createFeatureSelector<State, CartsState>(cartsStateConfig.stateKey);

export const getCartEntitiesState = createSelector(
  getCartsState,
  state => state.carts
);

export const getSelectedCartId = createSelector(
  getCartEntitiesState,
  fromCarts.getSelectId
);


export const {
  selectAll: selectAllCarts,
  selectEntities: selectCartsEntities,
  selectIds: selectCartsIds,
  selectTotal: selectTotalCarts
} = fromCarts.adapter.getSelectors(getCartEntitiesState);


export const getSelectedCart = createSelector(
  selectCartsEntities,
  getSelectedCartId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const selectCartsCollections = createSelector(
  selectCartsEntities,
  selectCartsIds,
  (entities, ids: string[]) => {
    return ids
      .map(id=> entities[id])
      .filter((Cart) => Cart !== undefined);
  }
);

export const getTotalAmountBeforeTax = createSelector(
  selectCartsCollections,
  (entities) => {
    return entities
      .reduce((amount, arr)=> {
        return amount + arr.price;
      }, 0);
  }
);

export const getTotalTax = createSelector(
  selectCartsCollections,
  (entities) => {
    return entities
      .reduce((tax, arr)=> {
        return tax + arr.tax;
      }, 0);
  }
);


export const getShippingCost = createSelector(
  selectTotalCarts,
  (totalBeforeTax, tax) => {
    return totalBeforeTax > 0 ? 5000 : 0; // dummy
  }
);

export const getTotalAmountAfterTax = createSelector(
  getTotalAmountBeforeTax,
  getTotalTax,
  getShippingCost,
  (totalBeforeTax, tax, shipping) => {
    return (totalBeforeTax - tax) + shipping;
  }
);

export const getSearchState = createSelector(
  getCartsState,
  (state: CartsState) => state.search
);

export const getSearchCartsIds = createSelector(
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
