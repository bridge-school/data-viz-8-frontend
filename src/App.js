import React, { useEffect } from "react";
import "./App.scss";
import { request } from "./backend-request";
import { BrowserRouter as Router, Route} from "react-router-dom";

import CohortTypeSelectionPage from './Pages/CohortTypeSelectionPage';
import CohortSelectionScreen from './Pages/CohortSelectionPage';

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
      <Route path="/cohorts" component={CohortSelectionScreen} />
    </Router>
  );
}

export default App;
