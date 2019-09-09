import React from "react";
import Sidebar from '../Components/Sidebar'
import ChartMinorityPerCohort from '../Components/ChartMinorityPerCohort';
import BasicButtonList from "../Components/BasicButtonList";
import dummyData from '../DummyData/cohortDummyData'

function CohortDetailsPage({ match }) {

    // TODO: replace cohort data in state/api call for cohort by id
    // cohort key format: cohort-X
    let cohort;
    for (var i in dummyData){
        if(i.split("-")[1] === match.params.id) cohort = dummyData[i];
    }

    // TODO: make into a more generic helper function to filter a variety of ways?
    const minorityBreakdown = cohort.applicants
        .reduce((accumulator, applicant) => {
            // TODO: return to this, find a cleaner way that doesn't through an error
            // eslint-disable-next-line
            applicant.identities.map( identity  => {
                if(!accumulator.hasOwnProperty(identity)) accumulator[identity]= 0
                accumulator[identity] ++
            })
            return accumulator;
        }, {})
    const minorityGraphData = Object.entries(minorityBreakdown)
        .map(minority => (
            {x: minority[0], y: minority[1]}
        ))

    const sampleData = {
        minority: minorityGraphData
    };

    const listOfFilters = [
        {
            text: "Gender Identity",
            active: false
        },
        {
            text: "Minority Group",
            active: true
        },
        {
            text: "Bootcamps",
            active: false
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