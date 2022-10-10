import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart.component';
import { ElectronicsComponent } from './features/electronics/electronics.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { JeweleryComponent } from './features/jewelery/jewelery.component';
import { LoginComponent } from './features/login/login.component';
import { MensClothingComponent } from './features/mens-clothing/mens-clothing.component';
import { RegisterComponent } from './features/register/register.component';
import { SingleProductComponent } from './features/single-product/single-product.component';
import { WomensClothinComponent } from './features/womens-clothin/womens-clothin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: HomepageComponent
  },
  {
    path: 'products/:id',
    component: SingleProductComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'electronics',
    component: ElectronicsComponent
  },
  {
    path: 'Jewelery',
    component: JeweleryComponent
  },
  {
    path: 'mens clothing',
    component: MensClothingComponent
  },
  {
    path: 'womens clothing',
    component: WomensClothinComponent
  },{
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
