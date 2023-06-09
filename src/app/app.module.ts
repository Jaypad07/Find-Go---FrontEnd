import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterUserComponent } from './register-user/register-user.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreListingComponent } from './store-listing/store-listing.component';
import { RouterModule, Routes } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { ProductPageComponent } from './product-page/product-page.component';
import { HeaderComponent } from './header/header.component';
import { LocateProductComponent } from './locate-product/locate-product.component';


const routes: Routes = [
  { path: 'stores', component: StoreListingComponent }, // Default route
  { path: 'register', component: RegisterUserComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'stores/:id/products', component: ProductPageComponent },
  { path: 'products/:productName', component: LocateProductComponent },
  // { path: 'About'}
  
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RegisterUserComponent,
    LoginPageComponent,
    StoreListingComponent,
    ProductPageComponent,
    HeaderComponent,
    LocateProductComponent
  ],
  imports: [
    BrowserModule,
    GoogleMapsModule,
    RouterModule.forRoot(routes),
    NgbModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [SearchComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
