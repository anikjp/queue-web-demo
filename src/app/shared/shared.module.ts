import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutModule} from '@app/shared/components/layout/layout.module';
import {HeaderModule} from '@app/shared/components/header/header.module';
import {FooterModule} from '@app/shared/components/footer/footer.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    LayoutModule,
    HeaderModule,
    FooterModule,
  ]
})
export class SharedModule { }
