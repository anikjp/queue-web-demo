import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from '@app/modules/products/containers';
import {ProductDetailsComponent} from '@app/modules/products/containers';
import {ProductDetailsResolver, ProductsResolver} from '@app/modules/products/services';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    resolve: {
      products: ProductsResolver,
    }
  },
  {
    path: ':id',
    component: ProductDetailsComponent,
    resolve: {
      products: ProductsResolver,
      selectedProduct: ProductDetailsResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
