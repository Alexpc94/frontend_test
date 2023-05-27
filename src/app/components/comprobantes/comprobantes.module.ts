import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprobantesRoutingModule } from './comprobantes-routing.module';
import { ComprobComponent } from './comprob/comprob.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ComprobComponent
  ],
  imports: [
    CommonModule,
    ComprobantesRoutingModule,
    ReactiveFormsModule
  ]
})
export class ComprobantesModule { }
