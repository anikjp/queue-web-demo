import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import * as fromProducts from '@app/modules/products/stores/reducers';
import {select, Store} from '@ngrx/store';
import {getSelectedProduct} from '@app/modules/products/stores/selectors';
import {Observable} from 'rxjs';
import {Product} from '@app/modules/products/stores/models';
import {addCart} from '@app/modules/cart/stores/actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id: string;
  product: Observable<Product>;
  constructor(
    private route: ActivatedRoute,
    private store: Store<fromProducts.State>) {
    this.product = this.store.pipe(select(getSelectedProduct));
  }

  ngOnInit() {
    this.product = this.store.pipe(select(getSelectedProduct));
  }

  addToCart(product: Product) {
    this.store.dispatch(addCart({cart: product}));
  }

}
