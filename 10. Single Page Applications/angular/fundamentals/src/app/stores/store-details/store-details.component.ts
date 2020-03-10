import { Component } from '@angular/core'
import { StoreService } from '../shared/store.service'
import { ActivatedRoute, Params } from '@angular/router'
import { IStore, IProduct } from '../shared/index'

@Component({
  templateUrl: './store-details.component.html',
  
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
    .event-image { height: 100px; }
    a {cursor:pointer}
  `]
})
export class StoreDetailsComponent {
  store:IStore
  addMode:boolean
  filterBy: number = 0;
  sortBy: string = 'votes';

  constructor(private storeService:StoreService, private route:ActivatedRoute) {

  }
  ngOnInit() {
    this.route.data.forEach((data) => {
      this.store = data['store'];
      this.addMode = false;
    })
  }

  addProduct() {
    this.addMode = true
  }

  saveNewProduct(product:IProduct) {
    this.store.products.push(product)
    this.storeService.addProduct(this.store.id, product).subscribe();
    this.addMode = false
  }

  cancelAddProduct() {
    this.addMode = false
  }
}