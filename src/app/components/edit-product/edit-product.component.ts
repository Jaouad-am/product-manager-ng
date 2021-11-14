import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { productActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId!: number;
  productFormGroup!: FormGroup;
  submitted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private productsService: ProductsService,
    private eventDrivenService: EventDriverService) {
    this.productId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.productsService.getProductById(this.productId)
      .subscribe(product => {
        this.productFormGroup = this.fb.group({
          id: [product.id, Validators.required],
          name: [product.name, Validators.required],
          price: [product.price, Validators.required],
          quantity: [product.quantity, Validators.required],
          selected: [product.selected, Validators.required],
          available: [product.available, Validators.required],
        })
      })


  }


  onUpdateProduct() {
    this.productsService.updateProduct(this.productFormGroup.value)
      .subscribe(product => {
        this.eventDrivenService.publishEvent({ type: productActionsTypes.PRODUCT_UPDATED });
        alert('Product Updated Successfully!');
      })
  }
}
