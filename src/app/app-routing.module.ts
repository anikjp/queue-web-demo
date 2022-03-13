import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './modules/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module')
      .then(mod => mod.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module')
      .then(mod => mod.AuthModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./modules/products/products.module')
      .then(mod => mod.ProductsModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/cart/cart.module')
      .then(mod => mod.CartModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/about/about.module')
      .then(mod => mod.AboutModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
