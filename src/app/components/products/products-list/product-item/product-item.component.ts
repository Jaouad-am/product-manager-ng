import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/model/product/product.model';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, productActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product | null = null;
  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor(private eventDrivenService: EventDriverService) { }

  ngOnInit(): void {
  }

  selectProduct(product: Product) {
    //this.productEventEmitter.emit({ type: productActionsTypes.SELECT_PRODUCT, payload: product })
    this.eventDrivenService.publishEvent({ type: productActionsTypes.SELECT_PRODUCT, payload: product });
  }

  deleteProduct(product: Product) {
    //this.productEventEmitter.emit({ type: productActionsTypes.DELETE_PRODUCT, payload: product })
    this.eventDrivenService.publishEvent({ type: productActionsTypes.DELETE_PRODUCT, payload: product });
  }

  onUpdate(product: Product) {
    //this.productEventEmitter.emit({ type: productActionsTypes.UPDATE_PRODUCT, payload: product })
    this.eventDrivenService.publishEvent({ type: productActionsTypes.UPDATE_PRODUCT, payload: product });
  }

}
