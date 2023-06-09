import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import { ApiService } from '../api.service';
import { Store } from '../models/store.models';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  productList: Product[] = [];
  sectionList: Store[] = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStoreById(1)
    .subscribe((data: any) => {this.sectionList = data.storeSections;
       console.log(data);});

    this.apiService.getProducts()
    .subscribe((products: any) => {this.productList = products
      console.log(products);});
  }
}
