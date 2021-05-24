import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingModule } from './shopping/shopping.module';
import { AmulComponent } from './shopping/amul/amul.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingModule,
    // AmulComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
