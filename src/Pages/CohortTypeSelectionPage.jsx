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
            { name: 'Frontend Development' },
            { name: 'Backend Development', disabled: true },
            { name: 'Design', disabled: true },
          ]}/>
        </div>
      </div>
    </>
  )
}

export default CohortTypeSelectionPage;
