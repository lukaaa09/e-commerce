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
  public totalItem: number = 0
  public products!: IProducts[]
  public cartItem: any = []
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
      tap((data: IProducts[]) => {
        this.products = data
        console.log(data)
      })
    ).subscribe()
    this.cartservice.search.subscribe((data: string) => {
      this.searchKey = data
      console.log(data)
    })
    if(localStorage.getItem('cart')) {
      this.cartItem = JSON.parse(localStorage.getItem('cart')!)
      console.log(this.cartItem)
      
    }
  }
  public saveCart(id: number): void {
    let singleProduct = this.products.find((i: IProducts) => i.id == id)
    console.log(singleProduct)
    let z = confirm('Do you want to add this item?')
    if(z) {
      this.cartItem.push(singleProduct)
      this.totalItem++
    }
    localStorage.setItem('cart', JSON.stringify(this.cartItem))

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
