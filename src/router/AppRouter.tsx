import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "screens/Home";
import Login from "screens/Login";
import NotFound from "screens/NotFound";
import { useIsLoggedIn } from "context/contextFn";

const AppRouter = () => {
  const { isLoggedIn } = useIsLoggedIn();

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <Home /> : <Login />}
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
