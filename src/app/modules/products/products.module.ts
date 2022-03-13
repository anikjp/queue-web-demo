import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './containers';
import { ProductsRoutingModule } from './products-routing.module';
import {ProductDetailsComponent} from './containers';
import {ProductsEffects} from '@app/modules/products/stores/effects'
import {StoreModule} from '@ngrx/store';
import {reducers} from '@app/modules/products/stores/reducers';
import {EffectsModule} from '@ngrx/effects';
import {ProductListPreviewComponent} from '@app/modules/products/components/product-list-preview.component';
import {productsStateConfig} from '@app/modules/products/stores';
import {CartModule} from '@app/modules/cart/cart.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forFeature(productsStateConfig.stateKey, reducers),
    EffectsModule.forFeature([ProductsEffects]),
    CartModule,
  ],
  declarations: [
    ProductListPreviewComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  exports: [
    ProductListComponent
  ],
})
export class ProductsModule { }
