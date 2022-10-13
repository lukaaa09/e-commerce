import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CartService } from 'src/app/core/services/cart.service';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-jewelery',
  templateUrl: './jewelery.component.html',
  styleUrls: ['./jewelery.component.scss']
})
export class JeweleryComponent implements OnInit {
  public searchKey: string = ''
  public searchTerm: string = ''
  jewelery: any
  constructor(private categroiesService: CategoriesService, private cartService: CartService) { }

  ngOnInit(): void {
    this.categroiesService.getJewelery().pipe(
      tap((data) =>{
        this.jewelery = data
      })
    ).subscribe()
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val
    })
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value
    console.log(this.searchTerm)
    this.cartService.search.next(this.searchTerm)
  }
}
