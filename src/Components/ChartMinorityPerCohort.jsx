import React from "react";
import { VictoryChart, VictoryBar } from 'victory';
import materialTheme from '../Styles/victoryMaterialTheme';

function ChartMinorityPerCohort({ data }) {
    return (
        <VictoryChart
            theme={materialTheme}
            domainPadding={{ x:[20, 12] }}
            animate={{
                duration: 1200,
                onLoad: { duration: 1000 }
                }} 
        >
            <VictoryBar
                style={{ data: { fill: "#4E57CA" } }}
                data={data}
            />
        </VictoryChart>
    );
}

export default ChartMinorityPerCohort;
