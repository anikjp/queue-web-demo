import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {LoadCarts, SearchSuccess} from '@app/modules/cart/stores/actions';
import { delay, map, switchMap, take} from 'rxjs/operators';
import {empty, of} from 'rxjs';
import {CartsServices} from '@app/modules/cart/service/carts.services';

@Injectable()
export class CartsEffects {

  $search = createEffect(()=> (
    this.action$.pipe(
      ofType(LoadCarts),
      delay(500), // for test
      switchMap((condition) => {
        const carts = this.cartsService.loadCartsFromLocalDB(condition);
        return of(SearchSuccess({carts}))
      })
    )
  ));

  constructor(private action$: Actions, private cartsService: CartsServices) {
  }
}
