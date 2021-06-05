import * as React from "react";
import { useIsLoggedIn } from "context/contextFn";

export default function Home() {
  const { setIsLoggedIn } = useIsLoggedIn();

  return (
    <>
      <div>Home</div>
      <button onClick={() => setIsLoggedIn(false)}>Log out now!</button>
    </>
  );
}
