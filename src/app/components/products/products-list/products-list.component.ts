import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product/product.model';
import { ActionEvent, AppDataState, DataStateEnum, productActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() productsList$: Observable<AppDataState<Product[]>> | null = null;
  //@Output() productEventEmitter: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();
  readonly DataStateEnum = DataStateEnum;

  constructor() { }

  ngOnInit(): void {
  }
  /*
    selectProduct(p: Product) {
      this.productEventEmitter.emit({ type: productActionsTypes.SELECT_PRODUCT, payload: p });
    }
  
    deleteProduct(p: Product) {
      this.productEventEmitter.emit({ type: productActionsTypes.DELETE_PRODUCT, payload: p })
    }
  
    onUpdate(p: Product) {
      this.productEventEmitter.emit({ type: productActionsTypes.UPDATE_PRODUCT, payload: p })
    }
  
   onEventEmitted($event: ActionEvent) {
      this.productEventEmitter.emit($event);
    }*/

}
