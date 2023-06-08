import { Component, OnInit } from '@angular/core';
import { Store } from '../models/store.models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-store-listing',
  templateUrl: './store-listing.component.html',
  styleUrls: ['./store-listing.component.css']
})
export class StoreListingComponent implements OnInit {
  storeList: Store[] = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStores()
    .subscribe((stores: any) => {this.storeList = stores
      console.log(stores);});
  }
}
