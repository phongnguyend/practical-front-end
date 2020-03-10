import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"
import { Injectable } from "@angular/core"
import { StoreService } from '../shared/store.service'

@Injectable()
export class StoreRouteActivator implements CanActivate { 
  constructor(private storeService:StoreService, private router:Router) {

  }

  canActivate(route:ActivatedRouteSnapshot) {
    const storeExists = !!this.storeService.getStore(route.params['id'])

    if (!storeExists)
      this.router.navigate(['/404'])
    return storeExists
  }
}