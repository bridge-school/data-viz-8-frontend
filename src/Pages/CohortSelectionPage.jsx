import React from "react";
import BasicLinkList from '../Components/BasicLinkList'
import Header from '../Components/Header'

function CohortSelectionPage() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="wrapper">
          {/* TODO: replace this data with data from json dataset, then from the BE, eventually */}
          <BasicLinkList title="Frontend Development Cohorts" data={[
            { name: 'Cohort 3'},
            { name: 'Cohort 2'},
            { name: 'Cohort 1'},
          ]}/>
        </div>
      </div>
    </>
  )
}

export default CohortSelectionPage;
