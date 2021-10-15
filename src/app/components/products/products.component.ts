import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products?:Product[]; //ou |null=null
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }
  getProducts(){
    return this.productsService.getProducts().subscribe(data=>
      {this.products = data;})
  }
}
