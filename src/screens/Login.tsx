import * as React from "react";
import { useIsLoggedIn } from "context/contextFn";

export default function Login() {
  const { setIsLoggedIn } = useIsLoggedIn();

  return (
    <>
      <div>Login</div>
      <button onClick={() => setIsLoggedIn(true)}>Log in now!</button>
    </>
  );
}
