import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { IProducts } from 'src/app/core/interfaces/protucts-interface';
import { CategoriesService } from 'src/app/core/services/categories.service';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit {
  public products: BehaviorSubject<IProducts[]> = new BehaviorSubject<IProducts[]>([])
  public categories: any
  constructor(private productService: ProductsService, 
    private categoriesService: CategoriesService,
    private router: Router) { }

  ngOnInit(): void {
    this.productService.getProducts().pipe(
      tap((data: IProducts[]) => {
        this.products.next(data)
        console.log(data)
      })
    ).subscribe()
  }

  public getproduct(id: number) {
    this.router.navigateByUrl(`/products/${id}`).then()
  }

}
