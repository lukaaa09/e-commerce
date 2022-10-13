import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-mens-clothing',
  templateUrl: './mens-clothing.component.html',
  styleUrls: ['./mens-clothing.component.scss']
})
export class MensClothingComponent implements OnInit {
  public searchKey: string = ''
  menClothing: any
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getMensClothing().pipe(
      tap((data) => {
        this.menClothing = data
      })
    ).subscribe()
  }

}
