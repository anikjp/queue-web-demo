import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '@app/shared/components/header/header.component';
import {RouterModule} from '@angular/router';
import {SpHeaderComponent} from '@app/shared/components/header/sp-header/sp-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    SpHeaderComponent
  ]
})
export class HeaderModule { }
