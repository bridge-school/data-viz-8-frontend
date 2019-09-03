import React from "react";

import Header from '../Components/Header'
import BasicLinkList from '../Components/BasicLinkList'


function CohortTypeSelectionPage() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="wrapper">
          <BasicLinkList title="Bridge School Programs" data={[
            { name: 'Frontend Development', route: "cohorts" },
            { name: 'Backend Development', disabled: true , route: ""},
            { name: 'Design', disabled: true, route: ""},
          ]}/>
        </div>
      </div>
    </>
  )
}

export default CohortTypeSelectionPage;
