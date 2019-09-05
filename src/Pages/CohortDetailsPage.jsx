import React from "react";
import { VictoryChart, VictoryBar} from 'victory';
import Header from '../Components/Header';

import BasicButton from '../Components/BasicButton';

function CohortDetailsPage() {
    const sampleData = [
        { x: "Person of Colour", y: 15 },
        { x: "LGBTQIA+", y: 5 },
        { x: "Prefer not to disclose", y: 5 },
        { x: "No response", y: 10 }
    ]

    return (
        <>
            <div className="App">
                <Header backRoute="/cohorts"/>
                <div className="wrapper">
                    {/* TODO: add cohort name here from url or state */}
                    <h2>Cohort X Breakdown</h2>

                    <div className="twoColumns">

                        <section className="sidebar">
                            <h3>Filter Applicants by:</h3>
                            {/* TODO: look at how to toggle active filter indicator (router?) */}
                            <BasicButton text="Gender Identity" acitve={true}/>
                            <BasicButton text="Identities"/>
                            <BasicButton text="Bootcamps"/>
                            <BasicButton text="Employment Status"/>
                        </section>


                        <VictoryChart
                            // TODO: come up with our own Victory theme?
                            // theme={VictoryTheme.material}
                            domainPadding={10}
                        >
                        <VictoryBar
                            style={{ data: { fill: "#4E57CA" } }}
                            data={sampleData}
                        />
                        </VictoryChart>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default CohortDetailsPage;