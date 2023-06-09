import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-service.service';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locate-product',
  templateUrl: './locate-product.component.html',
  styleUrls: ['./locate-product.component.css']
})
export class LocateProductComponent implements OnInit {
  currentProduct: any;
  searchedWord: string = '';

  constructor(private searchService: SearchService, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
      this.apiService.getProductByName(this.searchService.getSearchWord())
      .subscribe((data: any) => {this.currentProduct = data;
      this.router.navigate(['/api/products/search', this.searchedWord])
        });
  }
}

