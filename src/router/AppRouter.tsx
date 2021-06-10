import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UseIsLoggedIn } from "context/contextFn";
import routes from "router/routes";
import Layout from "components/Layout";
import Home from "screens/Home";
import Login from "screens/Login";
import SignUp from "screens/SignUp";
import NotFound from "screens/NotFound";
import Add from "screens/Add";
import Edit from "screens/Edit";

const AppRouter = () => {
  const { isLoggedIn } = UseIsLoggedIn();

  return (
    <Router>
      <Layout>
        <Switch>
          <Route
            path={routes.home}
            exact
            component={isLoggedIn ? Home : Login}
          />
          {!isLoggedIn ? (
            <Route path={routes.signUp} component={SignUp} />
          ) : null}
          <Route path={routes.add} component={Add} />
          <Route path={routes.edit} component={Edit} />

          <Route path={routes.notFound} component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default AppRouter;
