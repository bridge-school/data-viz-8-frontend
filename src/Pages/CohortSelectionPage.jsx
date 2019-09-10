import React from "react";
import BasicLinkList from '../Components/BasicLinkList'
import Header from '../Components/Header'
import { VictoryChart, VictoryLine, VictoryLabel } from 'victory';
import styles from '../Styles/graphs.module.scss'
import materialTheme from '../Styles/victoryMaterialTheme'

function CohortSelectionPage() {
  return (
    <>
      <div className="App">
        <Header backRoute="/"/>
        <div className="wrapper">
        <div>
          <VictoryChart
            animate={{
              duration: 1200,
              onLoad: { duration: 1000 }
            }}
            theme={materialTheme}
            height={200}
          >
            <VictoryLabel 
              text="Applicants Over Time" 
              x='50%' 
              y='15%' 
              textAnchor="middle"
              style={{ fontSize: 12 }}
            />
            <VictoryLabel
              text="All Cohorts"
              x='50%' 
              y='93%' 
              angle={50} 
              textAnchor="middle"
              style={{ fontSize: 10 }}
            />
            <VictoryLine
              data={[
                { x: "1", y: 35, cohort: 1 },
                { x: "2", y: 72, cohort: 2 },
                { x: "3", y: 135, cohort: 3 },
                { x: "4", y: 197, cohort: 4 },
                { x: "5", y: 231, cohort: 5 },
                { x: "6", y: 273, cohort: 6 },
              ]}
            />
          </VictoryChart>
        </div>

          {/* TODO: replace this data with data from json dataset, then from the BE, eventually */}
          <BasicLinkList title="Frontend Development Cohorts" data={[
            { name: 'Cohort 3', route:"" },
            { name: 'Cohort 2', route:""  },
            { name: 'Cohort 1', route:""  },
          ]} />
        </div>
      </div>
    </>
  )
}

export default CohortSelectionPage;
