import React from "react";
import { VictoryChart, VictoryBar } from 'victory';

function ChartMinorityPerCohort({ data }) {
    return (
        <VictoryChart
            // TODO: come up with our own Victory theme?
            // theme={VictoryTheme.material}
            domainPadding={10}
        >
            <VictoryBar
                style={{ data: { fill: "#4E57CA" } }}
                data={data}
            />
        </VictoryChart>
    );
}

export default ChartMinorityPerCohort;
