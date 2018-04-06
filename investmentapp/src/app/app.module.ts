import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockService} from './stock.service';
import { UserComponent } from './user/user.component';
import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ApiService} from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockDetailComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    ApiService,
    StockService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
