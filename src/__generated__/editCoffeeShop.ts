/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editCoffeeShop
// ====================================================

export interface editCoffeeShop_editCoffeeShop {
  __typename: "EditCoffeeShopResult";
  ok: boolean;
  error: string | null;
}

export interface editCoffeeShop {
  editCoffeeShop: editCoffeeShop_editCoffeeShop;
}

export interface editCoffeeShopVariables {
  id: number;
  name?: string | null;
  latitude?: string | null;
  longitude?: string | null;
  file?: any | null;
  category?: string | null;
}
