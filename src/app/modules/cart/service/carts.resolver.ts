import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromCart from '@app/modules/cart/stores/reducers'
import {LoadCarts, selectedCartId} from '@app/modules/cart/stores/actions';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartsResolver implements Resolve<void> {
  constructor(private store: Store<fromCart.State>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const condition= {}; // TBD
    this.store.dispatch(LoadCarts({condition}));
  }
}



@Injectable({
  providedIn: 'root',
})
export class CartDetailsResolver implements Resolve<void> {
  constructor(private store: Store<fromCart.State>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.params) {
      const selectedId= route.params.id;
      this.store.dispatch(selectedCartId({id: selectedId}));
    }
  }
}
