import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from './models/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  products$: Observable<Product[]> | undefined
  subscribe: Subscription | undefined
  productsList: Product[] | undefined

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.getListAllProducts()
    this.getAllProducts()
  }

  getAllProducts() {
    // this.subscribe = this.products$?.subscribe()
  }

  ngOnDestroy(): void {
    // this.subscribe?.unsubscribe
  }
}
