import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-womens-clothin',
  templateUrl: './womens-clothin.component.html',
  styleUrls: ['./womens-clothin.component.scss']
})
export class WomensClothinComponent implements OnInit {
  womensClothing: any
  constructor(private categoriesServie: CategoriesService) { }

  ngOnInit(): void {
    this.categoriesServie.getWomensClothing().pipe(
      tap((data) => {
        this.womensClothing = data
      })
    ).subscribe()
  }

}
