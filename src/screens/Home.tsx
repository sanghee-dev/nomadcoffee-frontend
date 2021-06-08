import { useHistory } from "react-router";
import { logUserOut } from "apollo";

export default function Home() {
  const history = useHistory();

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => logUserOut(history)}>Log out</button>
    </>
  );
}
