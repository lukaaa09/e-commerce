import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ProductsService } from 'src/app/core/services/products.service';
import {IProducts } from '../../core/interfaces/protucts-interface'

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  currentProductName: any
  currentProduct: BehaviorSubject<IProducts> = new BehaviorSubject<IProducts>({} as IProducts)
  
  constructor(private productService: ProductsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.currentProductName = this.activatedRoute.snapshot.paramMap.get('id')
    this.singleProduct()
  }

  public singleProduct() {
    this.productService.getSingleProduct(this.currentProductName).pipe(
      tap((data: IProducts) => {
        this.currentProduct.next(data)
        console.log(data)
      })
    ).subscribe()
  }

}
