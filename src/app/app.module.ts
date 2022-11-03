import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './features/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleProductComponent } from './features/single-product/single-product.component';
import { RegisterComponent } from './features/register/register.component';
import { LoginComponent } from './features/login/login.component';
import { SearchBodyComponent } from './features/search-body/search-body.component';
import { ElectronicsComponent } from './features/electronics/electronics.component';
import { MensClothingComponent } from './features/mens-clothing/mens-clothing.component';
import { JeweleryComponent } from './features/jewelery/jewelery.component';
import { WomensClothinComponent } from './features/womens-clothin/womens-clothin.component';
import { CartComponent } from './features/cart/cart.component';
import { FilterPipe } from './shared/filter.pipe';
import { FormComponent } from './features/form/form.component';
import { BaselayoutComponent } from './features/baselayout/baselayout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SingleProductComponent,
    RegisterComponent,
    LoginComponent,
    SearchBodyComponent,
    ElectronicsComponent,
    MensClothingComponent,
    JeweleryComponent,
    WomensClothinComponent,
    CartComponent,
    FilterPipe,
    FormComponent,
    BaselayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
