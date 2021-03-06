import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { productActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFormGroup!: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private productsService: ProductsService,
    private eventDrivenService: EventDriverService) { }

  ngOnInit(): void {

    this.productFormGroup = this.fb.group({

      name: ["", Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required]
    });
  }

  onSaveProduct() {
    this.submitted = true;
    if (this.productFormGroup.invalid) return;
    this.productsService.addProduct(this.productFormGroup.value)
      .subscribe(data => {
        this.eventDrivenService.publishEvent({ type: productActionsTypes.PRODUCT_ADDED });
        alert("Product added!");
      })
  }

}
