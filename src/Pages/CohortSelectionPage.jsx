import React from "react";
import BasicLinkList from '../Components/BasicLinkList'
import Header from '../Components/Header'
import { VictoryChart, VictoryLine } from 'victory';

function CohortSelectionPage() {
  const numberOfApplicants = [
    { x: "Cohort 4", y: 0 },
    { x: "Cohort 5", y: 0 },
    { x: "Cohort 6", y: 43 },
    { x: "Cohort 7", y: 44 },
    { x: "Cohort 8", y: 43 }
  ];

  const maxDomainValue =
    numberOfApplicants
      .map(item => item.y)
      .reduce((currentMax, currentItem) => Math.max(currentMax, currentItem))
    + 10;

  return (
    <>
      <div className="App">
        <Header backRoute="/"/>
        <div className="wrapper">

          {/* TODO: replace this data with data from json dataset, then from the BE, eventually */}
          <BasicLinkList title="Frontend Development Cohorts" data={[
            { name: 'Cohort 3', route:"" },
            { name: 'Cohort 2', route:"" },
            { name: 'Cohort 1', route:"" },
          ]} />

          <h2>Number of Applicants by Cohort</h2>
          <VictoryChart minDomain={{ y: 0 }} maxDomain={{ y: maxDomainValue }} >
            <VictoryLine
              style={{
                data: { stroke: "#4E57CA" },
                parent: { border: "1px solid #ccc" }
              }}
              data={numberOfApplicants}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
              labels={({ datum }) => datum.y}
              width={400}
            />
          </VictoryChart>
        </div>
      </div>
    </>
  )
}

export default CohortSelectionPage;
