import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartRoutingModule } from '@app/modules/cart/cart-routing.module';
import {CartComponent} from '@app/modules/cart/containers/cart-list/cart.component';
import {StoreModule} from '@ngrx/store';
import {cartsStateConfig} from '@app/modules/cart/stores';
import {reducers} from '@app/modules/cart/stores/reducers';
import {EffectsModule} from '@ngrx/effects';
import {CartsEffects} from '@app/modules/cart/stores/effects/carts.effects';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OrderScreenComponent} from '@app/modules/cart/containers/order-screen/order-screen.component';


@NgModule({
  declarations: [
    CartComponent,
    OrderScreenComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature(cartsStateConfig.stateKey, reducers),
    EffectsModule.forFeature([CartsEffects])
  ],
  exports: [
    CartComponent,
    OrderScreenComponent
  ]
})
export class CartModule { }
