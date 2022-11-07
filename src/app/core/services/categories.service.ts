import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IProducts } from '../interfaces/protucts-interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  baseUrl = 'https://fakestoreapi.com'

  constructor(private http: HttpClient) { }
  
  public getElectronics(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(`${this.baseUrl}/products/category/electronics`)
  }

  public getJewelery(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(`${this.baseUrl}/products/category/jewelery`)
  }

  
  public getMensClothing(): Observable<IProducts[]> {
    return this.http.get<IProducts[]>(`${this.baseUrl}/products/category/men's clothing`)
  }

    
  public getWomensClothing(): Observable<IProducts[]>{
    return this.http.get<IProducts[]>(`${this.baseUrl}/products/category/women's clothing`)
  }

  public getPrice() {
    return this.http.get(`${this.baseUrl}/products`).pipe(
      tap((data) => (data as unknown as any).price)
    )
  }
}
