import { gql } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { login, loginVariables } from "__generated__/login";

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`;

export const UseLogin = (onCompleted: any) => {
  const [login, { loading }] = useMutation<login, loginVariables>(
    LOGIN_MUTATION,
    { onCompleted }
  );
  return { login, loading };
};
