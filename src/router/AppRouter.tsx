import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UseIsLoggedIn } from "context/contextFn";
import routes from "router/routes";
import Home from "screens/Home";
import Login from "screens/Login";
import SignUp from "screens/SignUp";
import NotFound from "screens/NotFound";
import Layout from "components/Layout";
import DarkModeBtn from "components/auth/DarkModeBtn";

const AppRouter = () => {
  const { isLoggedIn } = UseIsLoggedIn();

  return (
    <Router>
      <Layout>
        <DarkModeBtn />
        <Switch>
          <Route
            path={routes.home}
            exact
            component={isLoggedIn ? Home : Login}
          />
          {!isLoggedIn ? (
            <Route path={routes.signUp} component={SignUp} />
          ) : null}
          <Route path={routes.notFound} component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
