import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemService } from './services/item.service';
import * as ItemActions from '../NgRx/actions/item.action';
import { Observable } from 'rxjs';
import { ItemState } from 'src/NgRx/states/item.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'shop_client';
  items$: Observable<ItemState>;

  constructor(
    private store: Store<{item: ItemState}>,
    // private itemService: ItemService,
    ){
      this.items$ =this.store.select('item');
    }

  ngOnInit(){
    // this.itemService.getAllItems().subscribe((data) => {
    //   console.log(data);
    // });
  }

  getItems(){
    console.log("clicked");
    this.store.dispatch(ItemActions.getAllItems());
    this.items$.subscribe((data) => {
      if(data){
        console.log(data);
      }
    });
  }
}
