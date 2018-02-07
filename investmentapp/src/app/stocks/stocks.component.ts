import { Component, OnInit } from '@angular/core';
import {Stock} from '../../models/stock';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  stock: Stock = {
    company: 'd',
    symbol: 'String',
    price: 1,
    change: 2,
    percentChange: 'asd',
    detail: 'dfs'
  }
  constructor() { }
  ngOnInit() {
  }

}
