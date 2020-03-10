import { Injectable } from '@angular/core'
import { Resolve, ActivatedRouteSnapshot } from '@angular/router'
import { StoreService } from './shared/store.service'

@Injectable()
export class StoreResolver implements Resolve<any> {
  constructor(private storeService:StoreService) {

  }

  resolve(route: ActivatedRouteSnapshot) {
    return this.storeService.getStore(route.params['id'])
  }
}