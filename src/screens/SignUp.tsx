import { UseCreateAccount } from "apollo/users/createAccount";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import routes from "router/routes";
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
import ErrorMessage from "components/text/ErrorMessage";

type FormData = {
  username: string;
  email: string;
  name: string;
  password: string;
  result?: string;
  message?: string;
};

export default function SignUp() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
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

  const { createAccount, loading } = UseCreateAccount(onCompleted);

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

        <ErrorMessage>{errors?.username?.message}</ErrorMessage>
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        <ErrorMessage>{errors?.result?.message}</ErrorMessage>

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
