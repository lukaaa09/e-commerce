import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject, tap } from 'rxjs';
import { ProductsService } from './core/services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title!: number
  public productBody: Subject<any> = new Subject<any>()

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
  }
  searchProduct() {
    this.productService.searchProduct(this.title).pipe(
      tap((data) => {
        this.productBody.next(data)
      })
    ).subscribe()
  }
}
