import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl = 'https://fakestoreapi.com'

  constructor(private http: HttpClient) { }
  
  public getElectronics() {
    return this.http.get(`${this.baseUrl}/products/category/electronics`)
  }

  public getJewelery() {
    return this.http.get(`${this.baseUrl}/products/category/jewelery`)
  }

  
  public getMensClothing() {
    return this.http.get(`${this.baseUrl}/products/category/men's clothing`)
  }

    
  public getWomensClothing() {
    return this.http.get(`${this.baseUrl}/products/category/women's clothing`)
  }
}
