import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { catchError, map, startWith } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //products?:Product[]; //ou |null=null
  products$:Observable<Product[]> |null=null;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }
  getProducts(){
   /* return this.productsService.getProducts().subscribe(data=>
      {this.products = data;}, err=>{console.log(err.message);})*/

    this.products$ = this.productsService.getProducts().pipe(
      map(data=>({dataState: "LOADED", data:data})),
      startWith({dataState: "LOADING"}),
      catchError(err=>of({dataState: "LOADED", errorMessage: err.message}))
      
      );
    
    ;

  }
}
