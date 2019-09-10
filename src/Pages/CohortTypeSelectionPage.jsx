import React from "react";
import BasicLinkList from '../Components/BasicLinkList'

function CohortTypeSelectionPage() {
  const options = [
    {
      name: 'Front-End Development',
      disabled: false,
      route: "/fed"
    },
    {
      name: 'Back-End Development',
      disabled: true,
      route: "",
    },
    {
      name: 'Design',
      disabled: true,
      route: "",
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
