import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { IComment } from 'src/app/core/interfaces/comments-interface';
import { IProducts } from 'src/app/core/interfaces/protucts-interface';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItem!: IProducts[]

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
    let cut = confirm('Are you sure')
    if(cut){
      this.cartItem = this.cartItem.filter((products: IProducts) => products.id != id)
    }
    localStorage.setItem('cart', JSON.stringify(this.cartItem))
  }
  
}
