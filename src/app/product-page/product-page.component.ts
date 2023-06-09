import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.models';
import { ApiService } from '../api.service';
import { Store } from '../models/store.models';
import { SearchService } from '../search-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent {
  productList: Product[] = [];
  sectionList: Store[] = [];
  Searchedword: string = "";
  currentProduct: any;

  constructor(private searchService: SearchService, private apiService: ApiService, private router: Router) { }


  ngOnInit() {
    this.apiService.getStoreById(1)
      .subscribe((data: any) => {
        this.sectionList = data.storeSections;
      });

    this.apiService.getProducts()
      .subscribe((products: any) => {
        this.productList = products
      });

      this.apiService.getProductByName(this.searchService.getSearchWord())
      .subscribe((data: any) => {this.currentProduct = data;
      // this.router.navigate(['/api/products/search', this.Searchedword])

        });
  }

  

  
}
