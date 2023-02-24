import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private httpClient: HttpClient) { }

  getAllItems(){
    return this.httpClient.get("https://social.runwayclub.dev/api/articles/latest");
  }
}
