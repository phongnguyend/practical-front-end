import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { StoreService } from '../shared/store.service'
import { map } from 'rxjs/operators'
 
@Injectable()
export class StoreListResolver implements Resolve<any> {
  constructor(private storeService:StoreService) {

  }

  resolve() {
    return this.storeService.getStores().pipe(map(stores => stores))
  }
}