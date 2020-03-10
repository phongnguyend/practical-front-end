import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { StoreService } from '../shared/index'

@Component({
  templateUrl: './create-store.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateStoreComponent {
  newStore
  isDirty:boolean = true
  constructor(private router: Router, private storeService:StoreService) {

  }

  saveStore(formValues) {
    this.storeService.saveStore(formValues).subscribe(() => {
      this.isDirty = false
      this.router.navigate(['/stores'])
    });
  }

  cancel() {
    this.router.navigate(['/stores'])
  }
}