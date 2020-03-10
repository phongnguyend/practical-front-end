import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module'

import {
  StoresListComponent,
  StoreThumbnailComponent,
  StoreService,
  StoreDetailsComponent,
  CreateStoreComponent,
  StoreRouteActivator,
  StoreListResolver,
  CreateProductComponent,
  ProductListComponent,
  DurationPipe,
  UpvoteComponent,
  VoterService,
  LocationValidator,
  StoreResolver
} from './stores/index'
import { AppComponent } from './app.component'
import { NavBarComponent } from './nav/nav-bar.component'
import { Error404Component } from './errors/404.component'
import { AuthService, AuthInterceptor,  AuthInitializer} from './auth/'
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponent} from './common/index';
import { ModalTriggerDirective } from './common/modalTrigger.directive';

import { APP_INITIALIZER } from '@angular/core';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    StoresListComponent,
    StoreThumbnailComponent,
    StoreDetailsComponent,
    NavBarComponent,
    CreateStoreComponent,
    Error404Component,
    CreateProductComponent,
    ProductListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe,
    UpvoteComponent,
    LocationValidator
  ],
  providers: [
    StoreService, 
    { provide: TOASTR_TOKEN, useValue: toastr }, 
    { provide: JQ_TOKEN, useValue: jQuery },
    StoreRouteActivator,
    StoreResolver,
    StoreListResolver,
    VoterService,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { 
      provide: 'canDeactivateCreateStore', 
      useValue: checkDirtyState 
    },
    {
      provide: APP_INITIALIZER,
      useFactory: AuthInitializer,
      deps: [AuthService],
      multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function checkDirtyState(component:CreateStoreComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this Store, do you really want to cancel?')
  return true
}