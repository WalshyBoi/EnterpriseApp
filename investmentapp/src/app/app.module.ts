import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { StocksComponent } from './stocks/stocks.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockService} from './stock.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    StockDetailComponent,
    MessagesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    StockService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
