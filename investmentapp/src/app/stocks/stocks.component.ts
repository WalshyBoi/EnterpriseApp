import { Component, OnInit } from '@angular/core';
import {Stock} from '../../models/stock';
import {StockService} from '../stock.service';
import {User} from '../../models/user';
//import {fakeStocks} from '../fake-stocks';

@Component({
    selector: 'app-stocks',
    templateUrl: './stocks.component.html',
    styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  stocks: Stock[];
  constructor(private stockService: StockService) {

  }
  //get stocks from service
  getStocksFromService():void{
    this.stockService.getStocks().subscribe(
    (updatedStocks) =>{
      this.stocks = updatedStocks;
      console.log(`this.stocks = ${JSON.stringify(this.stocks)}`);
    });

  }

  ngOnInit() {
  this.getStocksFromService();
  }

  selectedStock: Stock;
  onSelect(stock: Stock): void {
      this.selectedStock = stock;
    }
}
