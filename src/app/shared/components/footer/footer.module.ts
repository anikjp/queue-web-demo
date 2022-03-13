import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from '@app/shared/components/footer/footer.component';
import {RouterModule} from '@angular/router';
import {SpFooterComponent} from '@app/shared/components/footer/sp-footer/sp-footer.component';



@NgModule({
  declarations: [
    FooterComponent,
    SpFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    SpFooterComponent
  ]
})
export class FooterModule { }
