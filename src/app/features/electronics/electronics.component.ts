import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

  constructor(private categoriesService: CategoriesService) { }
  electronics: any
  ngOnInit(): void {
    this.categoriesService.getElectronics().pipe(
      tap((data) => {
       this.electronics = data
      })
    ).subscribe()
  }

}
