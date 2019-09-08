import React from "react";
import { VictoryChart, VictoryLine } from 'victory';

function ChartApplicantsPerCohort({ numberOfApplicants }) {
    const maxDomainValue =
        numberOfApplicants
            .map(item => item.y)
            .reduce((currentMax, currentItem) => Math.max(currentMax, currentItem))
        + 10;

    return (
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
    );
}

export default ChartApplicantsPerCohort;
