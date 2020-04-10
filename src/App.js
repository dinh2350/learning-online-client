import React from "react";
import HeaderContainer from "./components/NewHeader/HeaderContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/styles/Base/Reset.scss";
import "./App.scss";
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
<<<<<<< HEAD
      {/* <TestAPIContainer /> */}
=======
>>>>>>> dad1b2a0e49c0421152e6f74f8dc68be43084724
      <main className="main">
        <div className="main__wrapper">
          <HeaderContainer />
          <Switch>{showMenu()}</Switch>
        </div>
      </main>
    </Router>
  );
}
