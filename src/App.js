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
      {/* NOTE: just testing page before hooking into router */}
      <Route exact path="/" component={CohortDetailsPage} />
      {/* <Route exact path="/" component={CohortTypeSelectionPage} />
      <Route path="/cohorts" component={CohortSelectionPage} /> */}
    </Router>
  );
}

export default App;
