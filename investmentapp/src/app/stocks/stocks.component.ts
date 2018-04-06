import { Component, OnInit } from '@angular/core';
import {Stock} from '../../models/stock';
import {StockService} from '../stock.service';
import {Holdings} from '../../models/holdings';
import {fakeAib} from '../fake-aib';
import {fakeBoi} from '../fake-boi';
import { forkJoin } from 'rxjs/observable/forkJoin';
//import {fakeStocks} from '../fake-stocks';

import {MyNewInterface} from '../my-new-interface';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs/Observable';
import {AppComponent} from '../app.component';
import {stockGet} from '../../models/stockGet';
import {equal} from 'assert';

@Component({
    selector: 'app-stocks',
    templateUrl: './stocks.component.html',
    styleUrls: ['./stocks.component.css'],

  providers: [StockService]
})
export class StocksComponent implements OnInit {

  stocks: Stock[];
  aib: Stock[];
  holdings: Holdings;
  test: AppComponent;
  aibLiveStock : MyNewInterface;
  boiLiveStock: MyNewInterface;
  crhLiveStock: MyNewInterface;
  tescoLiveStock: MyNewInterface;
  xrpLiveStock: MyNewInterface;

  constructor(private _apiService: ApiService,private stockService: StockService) {

  }

  getBoi(): void {
    this._apiService.getBOI() .subscribe(data => {
        console.log(data);
        this.boiLiveStock = data;
      },
      error => {
        console.log(error)
      })
  }

  getCRH(): void {
    this._apiService.getCRH() .subscribe(data => {
        console.log(data);
        this.crhLiveStock = data;
      },
      error => {
        console.log(error)
      })
  }

  getTesco(): void {
    this._apiService.getTesco() .subscribe(data => {
        console.log(data);
        this.tescoLiveStock = data;
      },
      error => {
        console.log(error)
      })
  }

  getXRP(): void {
    this._apiService.getXRP() .subscribe(data => {
        console.log(data);
        this.xrpLiveStock = data;
      },
      error => {
        console.log(error)
      })
  }

  getAib(): MyNewInterface {
    this._apiService.getAIB().subscribe(
      (aib) => {
        let aibLiveStock = aib.price;
        console.log(`aib = ${JSON.stringify(aibLiveStock)}`);
        return aibLiveStock
      });
    return null
  }
  loadAIB() {

    forkJoin(this._apiService.getAIB(),this._apiService.getBOI(),this._apiService.getCRH(),
      this._apiService.getTesco(),this._apiService.getXRP()

    ).subscribe(([res1, res2, res3,res4,res5]) => {
          this.aibLiveStock = res1;
          this.boiLiveStock = res2;
          this.crhLiveStock = res3;
          this.tescoLiveStock = res4;
          this.xrpLiveStock = res5;

          this.setPrice();
          console.log('asds'+this.aibLiveStock);
        });
  }


  //get stocks from service
  getStocksFromService(): void {
    this.stockService.getStocks().subscribe(
      (updatedStocks) => {
        this.stocks = updatedStocks;
        console.log(`this.stocks = ${JSON.stringify(this.stocks)}`);
      });

  }

  setPrice(): number {
    length = this.stocks.length;
    var tmp = 0;
    var count = 0;
    var newAIB =  this.getAib();
    var newBOI = fakeBoi[0];

    for (var i = 0; i < length; i++) {

      if (this.stocks[i].company == 'AIB GROUP') {


        this.stocks[i].price = this.aibLiveStock.price;
        this.stocks[i].change = this.aibLiveStock.change;
        this.stocks[i].pChg = "test";
        this.stocks[i].value = (this.aibLiveStock.price * this.stocks[i].qty );
        this.stocks[i].sumgl = (this.stocks[i].value - ((this.stocks[i].cost/this.stocks[i].qty ) *this.stocks[i].qty ) ) ;

      } else if (this.stocks[i].company == 'BK IRE GRP PLC') {
        this.stocks[i].price = this.boiLiveStock.price;
        this.stocks[i].change = this.boiLiveStock.change;
        this.stocks[i].pChg = this.boiLiveStock.Chg;
        this.stocks[i].value = (this.boiLiveStock.price * this.stocks[i].qty );
        this.stocks[i].sumgl = (this.stocks[i].value - ((this.stocks[i].cost/this.stocks[i].qty ) *this.stocks[i].qty ) ) ;

      }else if (this.stocks[i].company == 'CRH') {
        this.stocks[i].price = this.crhLiveStock.price;
        this.stocks[i].change = this.crhLiveStock.change;
        this.stocks[i].pChg = this.crhLiveStock.Chg;
        this.stocks[i].value = (this.crhLiveStock.price * this.stocks[i].qty );
        this.stocks[i].sumgl = (this.stocks[i].value - ((this.stocks[i].cost/this.stocks[i].qty ) *this.stocks[i].qty ) ) ;
      }
      else if (this.stocks[i].company == 'Tesco') {
        this.stocks[i].price = this.tescoLiveStock.price;
        this.stocks[i].change = this.tescoLiveStock.change;
        this.stocks[i].pChg = this.tescoLiveStock.Chg;
        this.stocks[i].value = (this.tescoLiveStock.price * this.stocks[i].qty );
        this.stocks[i].sumgl = (this.stocks[i].value - ((this.stocks[i].cost/this.stocks[i].qty ) *this.stocks[i].qty ) ) ;
      }else if (this.stocks[i].company == 'Ripple') {
        this.stocks[i].price = this.xrpLiveStock.price;
        this.stocks[i].change = this.xrpLiveStock.change;
        this.stocks[i].pChg = this.xrpLiveStock.Chg;
        this.stocks[i].value = (this.xrpLiveStock.price * this.stocks[i].qty );
        this.stocks[i].sumgl = (this.stocks[i].value - ((this.stocks[i].cost/this.stocks[i].qty ) *this.stocks[i].qty ) ) ;
      }





      else {
        tmp = 2
      }
    }  console.log(`this2.stocks = ${JSON.stringify(this.stocks)}`);
    return newBOI.price;


  }






  ngOnInit() {

   // this.stockService.getAIB().subscribe(data => this.aibLiveStock = data);

    this.getStocksFromService();
    //this.update();
    //this.setPrice() loadAIB()
    this.loadAIB();
    console.log(`aib1 =` + this.aibLiveStock);


  }


  selectedStock: Stock;
  onSelect(stock: Stock): void {
      this.selectedStock = stock;
    }
}
