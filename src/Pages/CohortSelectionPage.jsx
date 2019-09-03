import React from "react";
import BasicList from '../Components/BasicList'
import Header from '../Components/Header'
import { VictoryChart, VictoryLine } from 'victory';

function CohortSelectionScreen() {
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
        <Header />
        <div className="wrapper">


          <VictoryChart minDomain={{ y: 0 }} maxDomain={{ y: maxDomainValue }} >
            <VictoryLine
              style={{
                data: { stroke: "#c43a31" },
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

          {/* TODO: replace this data with data from json dataset, then from the BE, eventually */}
          <BasicList title="Frontend Development Cohorts" data={[
            { name: 'Cohort 3' },
            { name: 'Cohort 2' },
            { name: 'Cohort 1' },
          ]} />
        </div>
      </div>
    </>
  )
}

export default CohortSelectionScreen;
