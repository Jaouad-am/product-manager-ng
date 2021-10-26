import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActionEvent, productActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  @Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter();



  constructor() { }

  ngOnInit(): void {
  }

  getProducts() {
    this.productEventEmitter.emit({ type: productActionsTypes.GET_ALL_PRODUCTS });
  }

  getSelectedProducts() {
    this.productEventEmitter.emit({ type: productActionsTypes.GET_SELECTED_PRODUCTS });
  }

  getAvailableProducts() {
    this.productEventEmitter.emit({ type: productActionsTypes.GET_AVAILABLE_PRODUCTS });
  }

  newProduct() {
    this.productEventEmitter.emit({ type: productActionsTypes.NEW_PRODUCT });
  }

  onSearch(dataForm: any) {
    this.productEventEmitter.emit({ type: productActionsTypes.SEARCH_PRODUCTS, payload: dataForm });
  }




}
