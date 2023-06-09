import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { SearchService } from '../search-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchBarText: string = "";
  productList: any;
  filteredProductList: any;
  constructor(private apiService: ApiService, private searchService: SearchService) {
  }

  filterSearch() {
    this.apiService.getProducts()
      .subscribe((products: any) => {
        this.productList = products.filter((product: any) => {
          return product.productName.toLowerCase().includes(this.searchBarText.toLowerCase().trim());
        })
        if (this.productList.length > 0) {
          const foundWord = this.productList[0].productName;
          this.searchService.setSearchWord(foundWord);
        }
      });
  }
}
