import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Calendar from "./pages/calendar";
import Donations from "./pages/donations";
import Funding from "./pages/funding";
import History from "./pages/history";
import Reviews from "./pages/reviews";
import Scholarships from "./pages/scholarships";
import Index from "./pages/index";

//Using react router to route pages across site

ReactDOM.render(
    <Router>
      <Switch>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/donations">
          <Donations />
        </Route>
        <Route path="/funding">
          <Funding />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/reviews">
          <Reviews />
        </Route>
        <Route path="/scholarships">
          <Scholarships />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
