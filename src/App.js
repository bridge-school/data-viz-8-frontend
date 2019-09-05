import React, { useEffect } from "react";
import "./App.scss";
import { request } from "./backend-request";
import { BrowserRouter as Router, Route} from "react-router-dom";

import CohortTypeSelectionPage from './Pages/CohortTypeSelectionPage';
import CohortSelectionPage from './Pages/CohortSelectionPage';
import CohortDetailsPage from './Pages/CohortDetailsPage';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });
  return (
    <Router>
      <Route exact path="/" component={CohortTypeSelectionPage} />
      <Route path="/cohorts" component={CohortSelectionPage} />

      {/* TODO: not sure if CohortDetailsPage route should live here, but included here for testing */}
      <Route path="/cohortdetails" component={CohortDetailsPage} />
    </Router>
  );
}

export default App;
