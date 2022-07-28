import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, mergeMap, Observable, of } from 'rxjs';
import { ProductsService } from '../services/product.service';
import {
  GetAllProductActionError,
  GetAllProductActionSuccess,
  GetSelectedProductActionError,
  GetSelectedProductActionSuccess,
  ProductActionsTypes,
} from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private productService: ProductsService,
    private effectActions: Actions
  ) {}

  getAllProductsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductActionsTypes.GET_ALL_PRODUCTS),
      mergeMap((action) => {
        console.log(action);
        return this.productService.getAllProducts().pipe(
          map((products) => new GetAllProductActionSuccess(products)),
          catchError((err) => of(new GetAllProductActionError(err.message)))
        );
      })
    )
  );

  /*Get Selected Products*/
  getSelectedProductsEffect: Observable<Action> = createEffect(() =>
    this.effectActions.pipe(
      ofType(ProductActionsTypes.GET_SELECTED_PRODUCTS),
      mergeMap((action) => {
        console.log(action);
        return this.productService.getSelectedProducts().pipe(
          map((products) => new GetSelectedProductActionSuccess(products)),
          catchError((err) =>
            of(new GetSelectedProductActionError(err.message))
          )
        );
      })
    )
  );
}
