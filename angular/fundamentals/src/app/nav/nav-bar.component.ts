import { Component } from '@angular/core'
import { AuthService } from '../auth/auth.service'
import { IProduct, StoreService } from '../stores/index';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {
  searchTerm: string = "";
  foundProducts: IProduct[]

  constructor(public auth: AuthService, private storeService: StoreService) {
    
  }

  searchProducts(searchTerm) {
    this.storeService.searchProducts(searchTerm).subscribe(products => {
      this.foundProducts = products;
    })
  }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }
}