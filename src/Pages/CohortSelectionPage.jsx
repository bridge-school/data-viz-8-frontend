import React from "react";
import BasicList from '../Components/BasicList'
// import logo from "./logo.svg";

function CohortSelectionScreen() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <p>
            Hayyyyy
          </p>
        </header>
        <div className="wrapper">
          <BasicList title="Cohorts" data={[
            { name: 'Cohort 3'},
            { name: 'Cohort 2'},
            { name: 'Cohort 1'},
          ]}/>
        </div>
      </div>
    </>
  )
}

export default CohortSelectionScreen;
