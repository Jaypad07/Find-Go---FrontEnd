import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from './models/user.models';
import { RegisterUser } from './models/user.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postRegister(user: RegisterUser) {
    return this.http.post('http://localhost:8080/api/users/register', user);
  }

  postLogin(user: LoginUser) {
    return this.http.post(`http://localhost:8080/api/users/login`, user);
  }

  getStores() {
    return this.http.get('http://localhost:8080/api/stores');
  }

  getProducts() { 
    return this.http.get('http://localhost:8080/api/products');
  }

  getStoreById(id: number) {
    return this.http.get(`http://localhost:8080/api/stores/storeId/${id}`);
  }

  getProductByName(name: string) {
    return this.http.get(`http://localhost:8080/api/products/search/${name}`);
  }

  getAllUsers() {
    const JWTtoken = localStorage.getItem('jwttoken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${JWTtoken}`);
    return this.http.get('http://localhost:8080/api/auth/users');
  }
}
