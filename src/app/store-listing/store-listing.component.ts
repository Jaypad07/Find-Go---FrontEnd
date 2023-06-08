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

// storeList: any;
// store: any;
// constructor(private routes:ActivatedRoute, private apiService: ApiService) { }

// ngOnInit() {

//   this.storeList = this.apiService.getStores();
//   this.routes.paramMap.subscribe(params => {
//   this.apiService.getStores()
//   .subscribe((data: any) => {
//     let paramId: string = params.get('id') || ""
//     this.store = data.find((store:any) => store.id === parseInt(paramId))
//     ;});
// })
// }