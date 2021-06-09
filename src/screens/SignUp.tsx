import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import {
  createAccount,
  createAccountVariables,
} from "__generated__/createAccount";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "router/routes";
import styled from "styled-components";
import HelmetTitle from "components/HelmetTitle";
import FormBox from "components/auth/FormBox";
import BlueButton from "components/button/BlueButton";
import LabelButton from "components/button/LabelButton";
import FacebookButton from "components/button/FacebookButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import Divider from "components/auth/Divider";
import AppStore from "components/auth/AppStore";
import RefObj from "components/auth/RefObj";

const Message = styled.h2`
  color: red;
  text-align: center;
`;

type FormData = {
  username: string;
  email: string;
  name: string;
  password: string;
  result?: string;
  message?: string;
};

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

export default function SignUp() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isValid },
    setError,
  } = useForm<FormData>({ mode: "onChange" });

  const onSubmitValid = (data: any) => {
    if (loading) return;
    createAccount({ variables: { ...data } });
  };
  const onCompleted = (data: any) => {
    const { username, password } = getValues();
    const {
      createAccount: { ok, error },
    } = data;
    if (!ok) {
      setError("result", { message: error });
    } else {
      history.push(routes.home, {
        username,
        password,
        message: "Account created. Plesase log in.",
      });
    }
  };

  const [createAccount, { loading }] = useMutation<
    createAccount,
    createAccountVariables
  >(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });

  return (
    <>
      <HelmetTitle title="Sign Up" />

      <FormBox onSubmit={handleSubmit(onSubmitValid)}>
        <p style={{ fontSize: 20 }}>
          Sign up to see photos and videos
          <br />
          from your friends.
        </p>

        <FacebookButton type="button">
          <FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: 18 }} />
          <h2>Log in with Facebook</h2>
        </FacebookButton>

        <Divider />

        <input
          ref={register(RefObj("Username"))}
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          ref={register(RefObj("Email"))}
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          ref={register(RefObj("Name"))}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          ref={register(RefObj("Password"))}
          type="password"
          name="password"
          placeholder="Password"
        />

        <Message>{errors?.username?.message}</Message>
        <Message>{errors?.email?.message}</Message>
        <Message>{errors?.name?.message}</Message>
        <Message>{errors?.password?.message}</Message>
        <Message>{errors?.result?.message}</Message>

        <BlueButton
          type="submit"
          value="Sign Up"
          disabled={!isValid || loading}
        />
      </FormBox>

      <FormBox>
        <LabelButton>
          <label>Have an account?</label>
          <Link to={routes.home}>
            <span>Log in</span>
          </Link>
        </LabelButton>
      </FormBox>
      <AppStore />
    </>
  );
}
