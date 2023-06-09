import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchBarText: string = "";
  productList: any;
  filteredProductList: any;
  constructor(private apiService: ApiService) {
  }

  filterSearch() {
    this.apiService.getProducts()
      .subscribe((products: any) => {
        this.productList = products.filter((product: any) => {
          return product.productName.toLowerCase().includes(this.searchBarText.toLowerCase().trim());
        })
      });
  }
}
