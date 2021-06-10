/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: seeAllShops
// ====================================================

export interface seeAllShops_seeAllShops_coffeeShops_user {
  __typename: "User";
  id: number;
  username: string;
  avatarURL: string | null;
}

export interface seeAllShops_seeAllShops_coffeeShops_photos {
  __typename: "CoffeeShopPhoto";
  id: number;
  url: string;
}

export interface seeAllShops_seeAllShops_coffeeShops_categories {
  __typename: "Category";
  id: number;
  name: string;
}

export interface seeAllShops_seeAllShops_coffeeShops {
  __typename: "CoffeeShop";
  id: number;
  name: string;
  latitude: string;
  longitude: string;
  user: seeAllShops_seeAllShops_coffeeShops_user;
  photos: (seeAllShops_seeAllShops_coffeeShops_photos | null)[] | null;
  categories: (seeAllShops_seeAllShops_coffeeShops_categories | null)[] | null;
}

export interface seeAllShops_seeAllShops {
  __typename: "SeeAllShopsResult";
  ok: boolean;
  error: string | null;
  totalCount: number | null;
  coffeeShops: (seeAllShops_seeAllShops_coffeeShops | null)[] | null;
}

export interface seeAllShops {
  seeAllShops: seeAllShops_seeAllShops;
}
