import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import {
  editCoffeeShop,
  editCoffeeShopVariables,
} from "__generated__/editCoffeeShop";

const EDIT_COFFEE_SHOP_MUTATION = gql`
  mutation editCoffeeShop(
    $id: Int!
    $name: String
    $latitude: String
    $longitude: String
    $file: Upload
    $category: String
  ) {
    editCoffeeShop(
      id: $id
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

export const UseEditCoffeeShop = (onCompleted: any) => {
  const [editCoffeeShop, { loading }] = useMutation<
    editCoffeeShop,
    editCoffeeShopVariables
  >(EDIT_COFFEE_SHOP_MUTATION, {
    onCompleted,
  });
  return { editCoffeeShop, loading };
};
