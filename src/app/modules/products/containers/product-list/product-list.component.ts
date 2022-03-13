import { Component, OnInit } from '@angular/core';
import {Product} from '@app/modules/products/stores/models';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as fromProducts from '@app/modules/products/stores/reducers';
import {selectProductsCollections, getSearchLoading, getSearchProductsIds, selectTotalBooks} from '@app/modules/products/stores/selectors';

@Component({
  selector: 'app-components',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Observable<Product[]>;
  loading:Observable<boolean>;

  constructor(private store: Store<fromProducts.State>) {
    this.products = this.store.pipe(select(selectProductsCollections));
    this.loading = this.store.pipe(select(getSearchLoading));
  }

  ngOnInit() {
    this.products = this.store.pipe(select(selectProductsCollections));
    this.loading = this.store.pipe(select(getSearchLoading));
  }

}
