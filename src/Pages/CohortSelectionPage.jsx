import React from "react";
import BasicList from '../Components/BasicList'
import Header from '../Components/Header'

function CohortSelectionScreen() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="wrapper">
          {/* TODO: replace this data with data from json dataset, then from the BE, eventually */}
          <BasicList title="Frontend Development Cohorts" data={[
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
