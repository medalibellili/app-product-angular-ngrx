import { Action } from '@ngrx/store';
import { Product } from '../model/product.model';

export enum ProductActionsTypes {
  /*Get All products*/
  GET_ALL_PRODUCTS = '[Products] Get All products',
  GET_ALL_PRODUCTS_SUCCESS = '[Products] Get All products Success',
  GET_ALL_PRODUCTS_ERROR = '[Products] Get All products Error',

  /*Get Selected products*/
  GET_SELECTED_PRODUCTS = '[Products] Get Selected products',
  GET_SELECTED_PRODUCTS_SUCCESS = '[Products] Get Selected products Success',
  GET_SELECTED_PRODUCTS_ERROR = '[Products] Get Selected products Error',
}

export class GetAllProductAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload: any) {}
}

export class GetAllProductActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetAllProductActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

/*Get Selected Products Action*/
export class GetSelectedProductAction implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public payload: any) {}
}

export class GetSelectedProductActionSuccess implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class GetSelectedProductActionError implements Action {
  type: ProductActionsTypes = ProductActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload: string) {}
}

export type ProductsActions =
  | GetAllProductAction
  | GetAllProductActionSuccess
  | GetAllProductActionError
  | GetSelectedProductAction
  | GetSelectedProductActionSuccess
  | GetSelectedProductActionError;
