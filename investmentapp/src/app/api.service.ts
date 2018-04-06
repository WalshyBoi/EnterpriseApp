import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable';
import "rxjs/Rx"
import {MyNewInterface} from './my-new-interface';
import {stockGet} from '../models/stockGet';
import 'rxjs/add/operator/toPromise';
import {toPromise} from 'rxjs/operator/toPromise';
@Injectable()
export class ApiService {
private aibUrl = "https://scraper601.herokuapp.com/scrape/assets/ise/AIBG_I";
private  boiUrl = "https://scraper601.herokuapp.com/scrape/assets/ise/BIRG_I";
private crhUrl = "https://scraper601.herokuapp.com/scrape/assets/ise/CRH_I";
private tescoUrl = "https://scraper601.herokuapp.com/scrape/assets/ftse350/TSCO";
 private rippleUrl =  "https://scraper601.herokuapp.com/scrape/assets/coinranking/ripple-xrp";
  constructor(private http: Http) {

  }




  getAIB(): Observable<MyNewInterface> {
    return this.http
      .get(this.aibUrl).map((response: Response) =>response.json())

  }

  getBOI(): Observable<MyNewInterface>{
    return this.http
      .get(this.boiUrl).map((res) => { return res.json()
      }).catch(this.handleError);
  }

  getCRH(): Observable<MyNewInterface>{
    return this.http
      .get(this.crhUrl).map((res) => { return res.json()
      }).catch(this.handleError);
  }

  getTesco(): Observable<MyNewInterface>{
    return this.http
      .get(this.tescoUrl).map((res) => { return res.json()
      }).catch(this.handleError);
  }
  getXRP(): Observable<MyNewInterface>{
    return this.http
      .get(this.rippleUrl).map((res) => { return res.json()
      }).catch(this.handleError);
  }


  private handleError(error: Response){
    return Observable.throw(error.statusText);
  }

}




///
