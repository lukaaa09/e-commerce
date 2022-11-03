import { Component, OnInit } from '@angular/core';
import { CartService } from '../core/services/cart.service';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.scss']
})
export class BaselayoutComponent implements OnInit {
  public totalItem: number = 0
  searchTerm: string = ''
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  public search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value
    this.cartService.search.next(this.searchTerm)
  }

}
