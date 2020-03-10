import { Component, OnInit } from '@angular/core'
import { StoreService } from '../shared/store.service'
import { ActivatedRoute } from '@angular/router'
import { IStore } from '../shared/index'

@Component({
  template: `
  <div>
    <h1>Stores</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let store of stores" class="col-md-5">
        <store-thumbnail [store]="store"></store-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class StoresListComponent implements OnInit {
  stores:IStore[]

  constructor(private storeService: StoreService, private route:ActivatedRoute) {
    
  }

  ngOnInit() {
    this.stores = this.route.snapshot.data['stores']
  }

}