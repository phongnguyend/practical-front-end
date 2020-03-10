import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoresListComponent } from './stores/stores-list/stores-list.component'
import { StoreDetailsComponent } from './stores/store-details/store-details.component'
import { CreateStoreComponent } from './stores/create-store/create-store.component'
import { Error404Component } from './errors/404.component'
import { StoreRouteActivator } from './stores/store-details/store-route-activator.service'
import { StoreListResolver } from './stores/stores-list/stores-list-resolver.service'
import { StoreResolver } from './stores/store-resolver.service';

const routes: Routes = [
  { path: 'stores/new', component: CreateStoreComponent, canDeactivate: ['canDeactivateCreateStore'] },
  { path: 'stores', component: StoresListComponent, resolve: {stores:StoreListResolver} },
  { path: 'stores/:id', component: StoreDetailsComponent, resolve: {store:StoreResolver} },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/stores', pathMatch: 'full'},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
