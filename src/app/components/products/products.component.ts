import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product/product.model';
import { ProductsService } from 'src/app/services/products.service';
import { catchError, map, startWith } from 'rxjs/operators';
import { of } from 'rxjs';
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  //products?:Product[]; //ou |null=null
  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }
  getProducts() {
    /* return this.productsService.getProducts().subscribe(data=>
       {this.products = data;}, err=>{console.log(err.message);})*/

    this.products$ = this.productsService.getProducts().pipe(
      map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))

    );
  }

  getSelectedProducts() {

    this.products$ = this.productsService.getSelectedProducts().pipe(
      map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))

    );
  }
  getAvailableProducts() {

    this.products$ = this.productsService.getAvailableProducts().pipe(
      map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))

    );
  }

  onSearch(dataForm: any) {
    this.products$ = this.productsService.searchProducts(dataForm.keyword).pipe(
      map(data => ({ dataState: DataStateEnum.LOADED, data: data })),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))

    );
  }

  selectProduct(p: Product) {
    this.productsService.selectProduct(p)
      .subscribe(data => {
        p.selected = data.selected;
      })
  }

  deleteProduct(p: Product) {
    let c = confirm("are you sure ?");
    if (c)
      this.productsService.deleteProduct(p)
        .subscribe(data => {
          this.getProducts();
        })
  }

}
