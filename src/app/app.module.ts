import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {NotFoundComponent} from './modules/not-found/not-found.component';
import {metaReducers, reducers} from './app.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DBModule } from '@ngrx/db';
import { schema } from './app.db';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from '@app/shared/shared.module';
import {extModules} from '../build-specifics';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    SharedModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers, runtimeChecks: { strictStateImmutability: true, strictActionImmutability: true } }),
    EffectsModule.forRoot(),
    extModules,
    DBModule.provideDB(schema)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
