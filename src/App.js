import React, { useEffect } from "react";
import "./App.scss";
import { request } from "./backend-request";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import CohortTypeSelectionPage from './Pages/CohortTypeSelectionPage';
import CohortSelectionPage from './Pages/CohortSelectionPage';
import ConnectedCohortDetailsPage from './Pages/CohortDetailsPage';
import Header from './Components/Header';

const initialState = {
  isLoading: false,
  headerBackButton: {
    show: false,
    path: ""
  },
  currentChart: null
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_DETAILS_PAGE":
      return {
        ...state,
        currentChart: action.payload
      }
    default:
      return state;
  }
}

const store = createStore(reducer);

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
          <Route path="/fed/cohorts/:id" component={ConnectedCohortDetailsPage} />
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

function ReduxApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default ReduxApp;
