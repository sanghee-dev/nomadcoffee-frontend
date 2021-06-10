import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import {
  createAccount,
  createAccountVariables,
} from "__generated__/createAccount";

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $name: String!
    $password: String!
  ) {
    createAccount(
      username: $username
      email: $email
      name: $name
      password: $password
    ) {
      ok
      error
    }
  }
`;

export const UseCreateAccount = (onCompleted: any) => {
  const [createAccount, { loading }] = useMutation<
    createAccount,
    createAccountVariables
  >(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });
  return { createAccount, loading };
};
