import React from "react";
import BasicLinkList from '../Components/BasicLinkList'
import ChartApplicantsPerCohort from '../Components/ChartApplicantsPerCohort'

function CohortSelectionPage() {
  const numberOfApplicants = [
    // { x: "Cohort 1", y: 0 },
    // { x: "Cohort 2", y: 0 },
    // { x: "Cohort 3", y: 0 },
    // { x: "Cohort 4", y: 0 },
    { x: "Cohort 5", y: 0 },
    { x: "Cohort 6", y: 43 },
    { x: "Cohort 7", y: 44 },
    { x: "Cohort 8", y: 43 }
  ];

  const cohortRouteMap = numberOfApplicants
    .map((cohort) => {
      return {
        disabled: cohort.y === 0,
        name: cohort.x,
        route: (cohort.y === 0) ? "" : "/fed/cohorts/" + cohort.x.split(" ")[1]
      }
    });

  return (
    <>
      <div className="App">
        <div className="wrapper">
          {/* TODO: replace this data with data from json dataset, then from the BE, eventually */}
          <BasicLinkList title="Frontend Development Cohorts" data={cohortRouteMap} />

          <h2>Number of Applicants per Cohort</h2>
          <ChartApplicantsPerCohort numberOfApplicants={numberOfApplicants} />
        </div>
      </div>
    </>
  )
}

export default CohortSelectionPage;
