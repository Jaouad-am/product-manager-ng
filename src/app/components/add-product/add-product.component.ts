import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productFormGroup!: FormGroup;

  constructor(private fb: FormBuilder, private productsService: ProductsService) { }

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
    this.productsService.addProduct(this.productFormGroup.value)
      .subscribe(data => {
        alert("Product added!");
      })
  }

}
