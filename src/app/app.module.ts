import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {BasketComponent} from '../app/basket/basket.component';

@NgModule({
  declarations: [
    AppComponent,
    BasketComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    BasketComponent
  ]
})
export class AppModule { }
