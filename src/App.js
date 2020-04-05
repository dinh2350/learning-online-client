import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderContainer from "./components/NewHeader/HeaderContainer";
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
        <Link to="/detailCourse/"> CHi tiết khóa học</Link>
        <Switch>{showMenu()}</Switch>
      </div>
    </Router>
  );
}
