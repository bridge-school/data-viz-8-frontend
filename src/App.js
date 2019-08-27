import React, { useEffect } from "react";
import "./App.css";
import { request } from "./backend-request";
import CohortSelectionPage from './Pages/CohortSelectionPage'

function App() {
  useEffect(() => {
    const fetchData = async () => {
      return await request("health");
    };
    fetchData();
  });
  return (
    <CohortSelectionPage />
  );
}

export default App;
