import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any
  public cartItem: any = []

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // this.cartService.getProducts().pipe(
    //   tap((data) => {
    //     this.products = data
    //   })
    // ).subscribe()
    if(localStorage.getItem('cart')) {
      this.cartItem = JSON.parse(localStorage.getItem('cart')!)
      console.log(this.cartItem)
    }
  }
  public removeItem(id: number) {
    this.cartItem = this.cartItem.filter((products: any) => products.id != id)
  }
  
}
