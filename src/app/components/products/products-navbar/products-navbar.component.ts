import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, productActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-navbar',
  templateUrl: './products-navbar.component.html',
  styleUrls: ['./products-navbar.component.css']
})
export class ProductsNavbarComponent implements OnInit {

  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();



  constructor(private eventDrivenService: EventDriverService) { }

  ngOnInit(): void {
  }

  getProducts() {
    //this.productEventEmitter.emit({ type: productActionsTypes.GET_ALL_PRODUCTS });
    this.eventDrivenService.publishEvent({ type: productActionsTypes.GET_ALL_PRODUCTS });

  }

  getSelectedProducts() {
    //this.productEventEmitter.emit({ type: productActionsTypes.GET_SELECTED_PRODUCTS });
    this.eventDrivenService.publishEvent({ type: productActionsTypes.GET_SELECTED_PRODUCTS });
  }

  getAvailableProducts() {
    //this.productEventEmitter.emit({ type: productActionsTypes.GET_AVAILABLE_PRODUCTS });
    this.eventDrivenService.publishEvent({ type: productActionsTypes.GET_AVAILABLE_PRODUCTS });
  }

  newProduct() {
    //this.productEventEmitter.emit({ type: productActionsTypes.NEW_PRODUCT });
    this.eventDrivenService.publishEvent({ type: productActionsTypes.NEW_PRODUCT });
  }

  onSearch(dataForm: any) {
    //this.productEventEmitter.emit({ type: productActionsTypes.SEARCH_PRODUCTS, payload: dataForm });
    this.eventDrivenService.publishEvent({ type: productActionsTypes.SEARCH_PRODUCTS, payload: dataForm });
  }




}
