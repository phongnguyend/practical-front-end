import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { IProduct, restrictedWords } from '../shared/index'

@Component({
  selector: 'create-product',
  templateUrl: './create-product.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error select, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateProductComponent implements OnInit {
  @Output() saveNewProduct = new EventEmitter()
  @Output() cancelAddProduct = new EventEmitter()

  newProductForm: FormGroup
  code: FormControl
  quantity: FormControl

  ngOnInit() {
    this.code = new FormControl('', Validators.required)
    this.quantity = new FormControl('', Validators.required)

    this.newProductForm = new FormGroup({
      code: this.code,
      quantity: this.quantity,
    })
  }

  saveProduct(formValues) {
    let product:IProduct = {
      id: undefined,
      name: formValues.name,
      code: formValues.code,
      quantity: formValues.quantity,
      voters: []
    }
    this.saveNewProduct.emit(product)
  }

  cancel() {
    this.cancelAddProduct.emit()
  }
}