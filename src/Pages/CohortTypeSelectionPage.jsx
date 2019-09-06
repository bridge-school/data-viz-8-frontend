import React from "react";

import Header from '../Components/Header'
import BasicLinkList from '../Components/BasicLinkList'


function CohortTypeSelectionPage() {
  const options = [
    {
      name: 'Front-End Development',
      disabled: false,
      route: "cohorts",
      query: "/fed"
    },
    {
      name: 'Back-End Development',
      disabled: true,
      route: "",
      query: ""
    },
    {
      name: 'Design',
      disabled: true,
      route: "",
      query: ""
    },
  ];

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <BasicLinkList title="Bridge School Programs" data={options} />
        </div>
      </div>
    </>
  )
}

export default CohortTypeSelectionPage;
