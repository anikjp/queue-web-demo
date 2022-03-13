import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromProducts from '@app/modules/products/stores/reducers'
import {LoadProducts, selectedProductId} from '@app/modules/products/stores/actions';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class ProductDetailsResolver implements Resolve<void> {
  constructor(private store: Store<fromProducts.State>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.params) {
      const selectedId= route.params.id;
      this.store.dispatch(selectedProductId({id: selectedId}));
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<void> {
  constructor(private store: Store<fromProducts.State>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const condition= {}; // TBD
    this.store.dispatch(LoadProducts({condition}));
  }
}


