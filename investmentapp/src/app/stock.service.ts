import { Injectable } from '@angular/core';
import { fakeStocks} from './fake-stocks';
import { Stock } from '../models/stock';

//get data asynchroonously with Observable
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

//message service
import {MessageService} from './message.service';

@Injectable()
export class StockService {
  getStocks(): Observable <Stock[]> {
    this.messageService.add(`${new Date().toLocaleString()}. Get Stock list`);
    return of (fakeStocks);
  }
  constructor(public messageService: MessageService) {

  }

}
