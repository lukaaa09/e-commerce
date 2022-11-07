import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RegisterService } from 'src/app/core/services/register.service';
import { CartService } from '../../core/services/cart.service';

@Component({
  selector: 'app-baselayout',
  templateUrl: './baselayout.component.html',
  styleUrls: ['./baselayout.component.scss']
})
export class BaselayoutComponent implements OnInit {
  public totalItem: number = 0
  searchTerm: string = ''
  getUsername = localStorage.getItem('username')
  constructor(private cartService: CartService,
    private router: Router,
    private resgisterService: RegisterService) { }

  ngOnInit(): void {
  }

  public search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value
    this.cartService.search.next(this.searchTerm)
  }
  navigatebylogin() {
    this.router.navigateByUrl('/login').then()
  }
  public logOut() {
    this.resgisterService.logOut()
  }
}
