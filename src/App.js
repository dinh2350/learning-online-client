import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeaderContainer from "./components/header/HeaderContainer";
import "./assets/styles/Base/Reset.scss";
import RoutesList from "./routes";
export default function App() {
  function showMenu() {
    if (RoutesList.length > 0) {
      return RoutesList.map((router, index) => {
        return (
          <Route path={router.path} exact={router.exact} key={index}>
            <router.components />
          </Route>
        );
      });
    }
  }
  return (
    <Router>
      <div>
        <HeaderContainer />
        <Switch>{showMenu()}</Switch>
      </div>
    </Router>
  );
}
