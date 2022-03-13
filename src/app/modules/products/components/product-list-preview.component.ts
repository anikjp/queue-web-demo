import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import {Product} from '@app/modules/products/stores/models';
import {Store} from '@ngrx/store';
import * as fromCarts from '@app/modules/cart/stores/reducers';
import {addCart} from '@app/modules/cart/stores/actions';


@Component({
  selector: 'app-product-list-preview',
  templateUrl:  './product-list-preview.component.html',
  styleUrls: [ './product-list-preview.component.css']
})

export class ProductListPreviewComponent implements OnInit {

  @Input() product: Product;
  constructor(private store: Store<fromCarts.State>) {
  }

  ngOnInit() {
  }

  addToCart() {
    this.store.dispatch(addCart({cart: this.product}));
  }
}
