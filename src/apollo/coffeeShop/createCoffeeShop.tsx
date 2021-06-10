import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import {
  createCoffeeShop,
  createCoffeeShopVariables,
} from "__generated__/createCoffeeShop";

const CREATE_COFFEE_SHOP_MUTATION = gql`
  mutation createCoffeeShop(
    $name: String!
    $latitude: String!
    $longitude: String!
    $file: Upload
    $category: String
  ) {
    createCoffeeShop(
      name: $name
      latitude: $latitude
      longitude: $longitude
      file: $file
      category: $category
    ) {
      ok
      error
    }
  }
`;

export const UseCreateCoffeeShop = (onCompleted: any) => {
  const [createCoffeeShop, { loading }] = useMutation<
    createCoffeeShop,
    createCoffeeShopVariables
  >(CREATE_COFFEE_SHOP_MUTATION, {
    onCompleted,
  });
  return { createCoffeeShop, loading };
};
