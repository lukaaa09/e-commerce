import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducts } from '../interfaces/protucts-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl = 'https://fakestoreapi.com'

  constructor(private http: HttpClient ) { }

  public getProducts(): Observable<IProducts[]>{
    // const params = {
    //   Headers: new HttpHeaders({
    //     'custom-params': '123' 
    //   })
    // }
    return this.http.get<IProducts[]>(`${this.baseUrl}/products`)
  }
  public getSingleProduct(id: any): Observable<any> {
    // let params = new HttpParams().append('luka', 'qwe')
    return this.http.get<any>(`${this.baseUrl}/products/${id}`)
  }
  public searchProduct(title: number) {
    return this.http.get(`${this.baseUrl}/products/${title}`)
  }
  
}
