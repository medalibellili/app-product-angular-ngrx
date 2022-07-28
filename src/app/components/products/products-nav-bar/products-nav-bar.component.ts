import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetAllProductAction, GetSelectedProductAction } from 'src/app/ngrx/products.actions';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css'],
})
export class ProductsNavBarComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit(): void {}

  onGetAllProducts() {
    this.store.dispatch(new GetAllProductAction({}));
  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductAction({}));

  }
}
