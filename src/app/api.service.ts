import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Item} from './views/items-view/Item';
@Injectable()
export class ApiService {

  constructor(
    private http: Http
  ) {
  }

  public getAllItems(): Observable<Item[]> {
    
    return this.http
      .get('http://localhost:8080/sparkl/items')
      .map(response => {
        const items = response.json();
        return items.map((item) => new Item(item));
      }).catch(this.handleError);
      

     
  }



  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
