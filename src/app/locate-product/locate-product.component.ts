import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search-service.service';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locate-product',
  templateUrl: './locate-product.component.html',
  styleUrls: ['./locate-product.component.css']
})
export class LocateProductComponent implements OnInit {
  currentProduct: any;
  searchedWord: string = '';

  constructor(private searchService: SearchService, private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      // this.apiService.getProductByName(this.searchService.getSearchWord())
      // .subscribe((data: any) => {this.currentProduct = data;
      // this.router.navigate(['/api/products/search', this.Searchedword])
        // });
        this.activatedRoute.paramMap.subscribe((params: any) => {
          const paramName: string = params.get('productName');
          this.searchedWord = paramName;
          console.log(paramName);
          
        })
  }
}

