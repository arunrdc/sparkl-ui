import { Component, OnInit } from '@angular/core';
import {Item} from './Item';
import { ApiService } from '../../api.service';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-items-view',
  templateUrl: './items-view.component.html',
  styleUrls: ['./items-view.component.css'],
  providers: [ApiService]
})
export class ItemsViewComponent implements OnInit {
  
  private apiURL='http://localhost:8080/sparkl/items';
 
  items: Item[];
  
  item: Item;
  
  constructor(private apiService: ApiService,private http: Http) {
    
     this.item ={
       itemName:'',
       itemDescription:'',
       itemId: 0,
       userName: '',
       channelName: ''
      
     }
   }
  

   public onPost(){
     console.log(this.item.itemName)
     const req = this.http.post('http://localhost:8080/sparkl/items/add', this.item)
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
     this.getItems();
   }
  
  
  
  public ngOnInit() {
    this.getItems();
  }

public getItems()
{
  this.apiService
  .getAllItems()
  .subscribe(
    (items) => {
      this.items = items;
    }
  );
}

}
