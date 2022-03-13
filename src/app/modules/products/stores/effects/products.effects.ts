import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {SearchFailure, SearchProducts, SearchSuccess, LoadProducts} from '@app/modules/products/stores/actions';
import {catchError, delay, map, switchMap, take} from 'rxjs/operators';
import {ProductsService} from '@app/modules/products/services/products.service';
import {empty, of} from 'rxjs';

@Injectable()
export class ProductsEffects {

  $search = createEffect(()=> (
    this.action$.pipe(
      ofType(SearchProducts),
      switchMap((query) => {
        return this.productsService.searchProducts(query).pipe(
          map((products)=> SearchSuccess({products})),
          catchError((errorMsg => of(SearchFailure({errorMsg}))))
        );
      })
    )
  ));

  $loadProducts = createEffect(()=> (
    this.action$.pipe(
      ofType(LoadProducts),
      delay(500), // for test
      switchMap((condition) => {
        const products = this.productsService.loadSampleProducts(condition);
        return of(SearchSuccess({products}))
      })
    )
  ));
  constructor(private action$: Actions, private productsService: ProductsService) {
  }
}
