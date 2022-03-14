import { Component, OnInit } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Cart} from '@app/modules/cart/stores/models';
import {select, Store} from '@ngrx/store';
import * as fromCarts from '@app/modules/cart/stores/reducers';
import {selectCartsCollections, getTotalAmountBeforeTax, getSearchLoading, getTotalTax, getTotalAmountAfterTax, getShippingCost} from '@app/modules/cart/stores/selectors';
import {deleteCart} from '@app/modules/cart/stores/actions';
import {QueueService} from '@app/shared/queue-service/queue.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts: Observable<Cart[]>;
  loading: Observable<boolean>;
  totalAmountBeforeTax: Observable<number>;
  totalTax: Observable<number>;
  totalAmountAfterTax: Observable<number>;
  shipping: Observable<number>;
  constructor(private store: Store<fromCarts.State>, private queueService: QueueService) {
    this.carts = this.store.pipe(select(selectCartsCollections));
    this.totalAmountBeforeTax = this.store.pipe(select(getTotalAmountBeforeTax));
    this.totalTax = this.store.pipe(select(getTotalTax));
    this.totalAmountAfterTax = this.store.pipe(select(getTotalAmountAfterTax));
    this.shipping = this.store.pipe(select(getShippingCost));
    this.loading = this.store.pipe(select(getSearchLoading));
  }

  ngOnInit(): void {
  }

  deleteFromCart(id:string) {
    this.store.dispatch(deleteCart({id}))
  }

  placeOrder(){
    const queuePayload= {
      invoiceNumber: Math.floor(Math.random() * 1000000),
      orderNumber: Math.floor(Math.random() * 1000000),
      orderDate: new Date(),
      orderType: 'Dummy',
    };
    this.queueService.completeCheckout(queuePayload);
  }
}
