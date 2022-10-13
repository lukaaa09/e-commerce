import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList: any = []
  public productList = new BehaviorSubject<any>([])
  public search = new BehaviorSubject<string>('')

  constructor() { }
  public getProducts() {
    return this.productList.asObservable()
  }
  public setProducts(product: any) {
    this.cartItemList.push(...product)
    this.productList.next(product)
  }
  public addToCart(product: any) {
    this.cartItemList.push(product)
    this.productList.next(this.cartItemList)
    this.getTotalPrice()
    console.log(this.cartItemList)
  }
  public getTotalPrice() {
    let totalPrice = 0
    this.cartItemList.map((a: any) => {
      totalPrice += a.total
    })
  }
  public removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if(product.id === a.id) {
        this.cartItemList.splice(index, 1)
      }
    })
  }
  public removeAll() {
    this.cartItemList = []
    this.productList.next(this.cartItemList)
  }
}
