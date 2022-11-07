import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { IProducts } from 'src/app/core/interfaces/protucts-interface';
import { CategoriesService } from 'src/app/core/services/categories.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {
  public searchKey: string = ''
  electronics!: IProducts[]
  constructor(private categoriesService: CategoriesService) { }
  
  ngOnInit(): void {
    this.categoriesService.getElectronics().pipe(
      tap((data: IProducts[]) => {
       this.electronics = data
       console.log(data)
      })
    ).subscribe()
  }

}
