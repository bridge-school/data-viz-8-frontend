import React from "react";
import { VictoryChart, VictoryBar, VictoryLabel, VictoryAxis } from 'victory';
import materialTheme from '../Styles/victoryMaterialTheme';

function ChartMinorityPerCohort({ data }) {
    const findResponsePercentage = (numberOfResponses) => {
        // TODO: replace hardcoded value with number from api
        const totalNumberOfApplicants = 135
        return `${Math.round(numberOfResponses/totalNumberOfApplicants*100)}%`
    }

    const maxDomainValue = 20
        // data
        //     .map(item => item.y)
        //     .reduce((currentMax, currentItem) => Math.max(currentMax, currentItem))
        //     + 10
    
    return (
        <VictoryChart
            theme={materialTheme}
            domainPadding={{ x: [20, 18], y: [10, maxDomainValue] }}
            animate={{
                onLoad: { duration: 200 }
            }} 
            style={{
                parent: {
                    position: 'relative',
                    top: '-70px',
                    left: 50,
                    height: 220
                }, 
            }}
            height={220}
        >
        <VictoryAxis
            tickLabelComponent={<VictoryLabel angle={45} textAnchor='start' />}
        />
        <VictoryAxis 
            dependentAxis
            theme={materialTheme}
            label='Number of Applicants'
            style={{ axisLabel: { fontSize: 6, padding: 30 }} }
        />
        <VictoryBar
            data={data}
            labels={({ datum }) => findResponsePercentage(datum.y)}
            style={{
                data: { fill: "#4E57CA" },
            }}
            labelComponent={ <VictoryLabel dy={-2}/> }
        />
        </VictoryChart>
    );
}

export default ChartMinorityPerCohort;
