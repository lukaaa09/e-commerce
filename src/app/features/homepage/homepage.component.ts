import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IProducts } from 'src/app/core/interfaces/protucts-interface';
import { CartService } from 'src/app/core/services/cart.service';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {
  public searchKey: string = ''
  public searchTerm: string = ''
  public totalItem: number = 0
  public products: any
  public categories: any
  public form = new FormGroup({
    priceFrom: new FormControl('', [Validators.required]),
    priceBefore: new FormControl('', [Validators.required])
  })
  constructor(private productService: ProductsService,
    private categoriesService: CategoriesService,
    private cartservice: CartService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().pipe(
      tap((data: any) => {
        this.products = data
      })
    ).subscribe()
    this.cartservice.getProducts().pipe(
      tap((response) => {
        this.totalItem = response.length
      })
    ).subscribe()
    this.cartservice.search.subscribe((data: any) => {
      this.searchKey = data
    })
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value
    console.log(this.searchTerm)
    this.cartservice.search.next(this.searchTerm)
  }
  
  public addToCart(item: any) {
    this.cartservice.addToCart(item);
    alert('are you sure')
  }

  public getproduct(id: number) {
    this.router.navigateByUrl(`/products/${id}`).then()
  }






















  public filterByPrice() {
    this.categoriesService.getPrice().pipe(      
    )
  }
  get priceFrom(): FormControl {
    return this.form.get('priceFrom') as FormControl
  }
  get priceBefore(): FormControl {
    return this.form.get('priceBefore') as FormControl
  }

}
