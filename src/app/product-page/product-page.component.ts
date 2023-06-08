import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  productList: Product[] = [];
  
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getStores()
    .subscribe((products: any) => {this.productList = products
      console.log(products);});
  }
}
