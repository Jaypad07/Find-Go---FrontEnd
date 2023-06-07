import { Component } from '@angular/core';
import { Store } from '../models/store.models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-store-listing',
  templateUrl: './store-listing.component.html',
  styleUrls: ['./store-listing.component.css']
})
export class StoreListingComponent {
  stores: Store[] = [];
}
