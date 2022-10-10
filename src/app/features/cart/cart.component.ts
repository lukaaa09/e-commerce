import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: any

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().pipe(
      tap((data) => {
        this.products = data
      })
    ).subscribe()
  }

}
