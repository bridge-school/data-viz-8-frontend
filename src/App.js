import React, { useEffect } from "react";
import "./App.scss";
import { request } from "./backend-request";
import CohortTypeSelectionPage from './Pages/CohortTypeSelectionPage'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });
  return (
    <CohortTypeSelectionPage />
  );
}

export default App;
