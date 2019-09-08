import React, { useEffect } from "react";
import "./App.scss";
import { request } from "./backend-request";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CohortTypeSelectionPage from './Pages/CohortTypeSelectionPage';
import CohortSelectionPage from './Pages/CohortSelectionPage';
import CohortDetailsPage from './Pages/CohortDetailsPage';
import Header from './Components/Header';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });
  return (
    <>
      <Router>
        <Header />
        {/* <Header backRoute="/" /> */}
        <Switch>
          <Route exact path="/" component={CohortTypeSelectionPage} />
          <Route exact path="/fed" component={CohortSelectionPage} />
          <Route path="/fed/cohorts/:id" component={CohortDetailsPage} />
        </Switch>
      </Router>
    </>
  );
}

/*
        /                   cohort type page
        /fed                FED cohort main page
        /fed/cohorts        DNE
        /fed/cohorts/:id    Page displays different charts and links
*/

export default App;
