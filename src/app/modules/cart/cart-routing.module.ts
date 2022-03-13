import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartComponent} from '@app/modules/cart/containers/cart-list/cart.component';
import {OrderScreenComponent} from '@app/modules/cart/containers/order-screen/order-screen.component';
import {CartsResolver} from '@app/modules/cart/service';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    resolve: {
      carts: CartsResolver
    },
  },
  {
    path: 'complete',
    component: OrderScreenComponent,
    resolve: {
      carts: CartsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
