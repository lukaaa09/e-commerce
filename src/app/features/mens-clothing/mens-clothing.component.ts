import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { IProducts } from 'src/app/core/interfaces/protucts-interface';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-mens-clothing',
  templateUrl: './mens-clothing.component.html',
  styleUrls: ['./mens-clothing.component.scss']
})
export class MensClothingComponent implements OnInit {
  menClothing!: IProducts[]
  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesService.getMensClothing().pipe(
      tap((data: IProducts[]) => {
        this.menClothing = data
      })
    ).subscribe()
  }

}
