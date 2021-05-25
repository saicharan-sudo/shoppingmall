import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MainComponent } from './main/main.component';
import { AmulComponent } from './amul/amul.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CheckboxPipe } from './checkbox.pipe';
import { RangePipe } from './amul/range.pipe';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


@NgModule({
  declarations: [
    FormComponent,
    MainComponent,
    AmulComponent,
    CheckboxPipe,
    RangePipe
  ],
  imports: [
    CommonModule,
    ShoppingRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    NgxSliderModule
  ]
})
export class ShoppingModule { }
