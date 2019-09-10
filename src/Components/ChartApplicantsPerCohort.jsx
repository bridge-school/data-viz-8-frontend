import React from "react";
import { VictoryChart, VictoryLine, VictoryLabel } from 'victory';
import materialTheme from '../Styles/victoryMaterialTheme'

function ChartApplicantsPerCohort({ numberOfApplicants }) {
    const maxDomainValue =
        numberOfApplicants
            .map(item => item.y)
            .reduce((currentMax, currentItem) => Math.max(currentMax, currentItem))
        + 10;

    return (
        <VictoryChart
            animate={{
            duration: 1200,
            onLoad: { duration: 1000 }
            }}
            theme={materialTheme}
            height={180}
            minDomain={{ y: 0 }} 
            maxDomain={{ y: maxDomainValue }}
        >
            <VictoryLabel 
                text="Applicants Over Time" 
                x='50%' 
                y='20%' 
                textAnchor="middle"
                style={{ fontSize: 10 }}
            />
            <VictoryLabel
                text="All Cohorts"
                x='50%' 
                y='88%' 
                angle={50} 
                textAnchor="middle"
                style={{ fontSize: 8 }}
            />
            <VictoryLine
                data={numberOfApplicants}
            />
        </VictoryChart>
    );
}

export default ChartApplicantsPerCohort;
