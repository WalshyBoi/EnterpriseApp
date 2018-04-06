import { Injectable } from '@angular/core';
import { fakeStocks} from './fake-stocks';
import { Stock } from '../models/stock';

//get data asynchroonously with Observable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Response} from '@angular/http';
import {MyNewInterface} from './my-new-interface';
import {ApiService} from './api.service';

@Injectable()
export class StockService {
  private _URL = "https://scraper601.herokuapp.com/scrape/assets/ise/AIBG_I";
  private link = "https://scraper601.herokuapp.com/scrape/test?n=1";
  newStocks = fakeStocks;
  price = 1;
  getStocks(): Observable <Stock[]> {

    return of (this.newStocks);
  }




  constructor(
    private http: HttpClient,private _apiService: ApiService) {




  }





}
