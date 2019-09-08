import React from "react";
import Sidebar from '../Components/Sidebar'
import ChartMinorityPerCohort from '../Components/ChartMinorityPerCohort';
import BasicButtonList from "../Components/BasicButtonList";


function CohortDetailsPage({ match }) {
    const sampleData = {
        minority: [
            { x: "Person of Colour", y: 15 },
            { x: "LGBTQIA+", y: 5 },
            { x: "Prefer not to disclose", y: 5 },
            { x: "No response", y: 10 }
        ]
    };

    const listOfFilters = [
        {
            text: "Gender Identity",
            active: false
        },
        {
            text: "Minority Group",
            active: false
        },
        {
            text: "Bootcamps",
            active: true
        },
        {
            text: "Employment Status",
            active: false
        },
    ];

    return (
        <>
            <div className="App">
                <div className="wrapper">
                    {/* TODO: add cohort name here from url or state */}
                    <h2>Cohort {match.params.id} Applicants</h2>

                    <div className="flexWrapper">

                        <Sidebar>
                            <h3>Filter Applicants by:</h3>
                            {/* TODO: look at how to toggle active filter (router?) */}

                            <BasicButtonList data={listOfFilters} />
                        </Sidebar>


                        <ChartMinorityPerCohort data={sampleData.minority} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default CohortDetailsPage;