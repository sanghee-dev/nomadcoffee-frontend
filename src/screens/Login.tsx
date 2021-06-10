import { UseLogin } from "apollo/users/login";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { logUserIn } from "apollo/apollo";
import { UseIsLoggedIn } from "context/contextFn";
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
  password: string;
  result?: string;
  message?: string;
};

export default function Login() {
  const { setIsLoggedIn } = UseIsLoggedIn();
  const location = useLocation<FormData>();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<FormData>({
    mode: "onChange",
    defaultValues: {
      username: location?.state?.username || "",
      password: location?.state?.password || "",
    },
  });

  const onSubmitValid = (data: any) => {
    if (loading) return;
    login({ variables: { ...data } });
  };
  const onCompleted = (data: any) => {
    const {
      login: { ok, error, token },
    } = data;
    if (!ok) setError("result", { message: error });
    if (token) {
      logUserIn(token);
      setIsLoggedIn(true);
    }
  };

  const { login, loading } = UseLogin(onCompleted);

  return (
    <>
      <HelmetTitle title="Log In" />

      <ErrorMessage>{location?.state?.message}</ErrorMessage>
      <FormBox onSubmit={handleSubmit(onSubmitValid)}>
        <input
          ref={register(RefObj("Username"))}
          style={{ borderColor: errors?.username ? "red" : "inherit" }}
          type="text"
          name="username"
          placeholder="Username"
        />
        <input
          ref={register(RefObj("Password"))}
          style={{ borderColor: errors?.password ? "red" : "inherit" }}
          type="password"
          name="password"
          placeholder="Password"
        />

        <ErrorMessage>{errors?.username?.message}</ErrorMessage>
        <ErrorMessage>{errors?.password?.message}</ErrorMessage>
        <ErrorMessage>{errors?.result?.message}</ErrorMessage>

        <BlueButton
          type="submit"
          value="Log In"
          disabled={!isValid || loading}
        />

        <Divider />

        <FacebookButton type="button">
          <FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: 18 }} />
          <h2>Log in with Facebook</h2>
        </FacebookButton>
      </FormBox>

      <FormBox>
        <LabelButton>
          <label>Don't have an account?</label>
          <Link to={routes.signUp}>
            <span>Sign up</span>
          </Link>
        </LabelButton>
      </FormBox>
      <AppStore />
    </>
  );
}
