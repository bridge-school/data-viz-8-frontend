import React from "react";
import { useTranslation } from 'react-i18next'

import Sidebar from '../Components/Sidebar'
import ChartMinorityPerCohort from '../Components/ChartMinorityPerCohort';
import BasicButtonList from "../Components/BasicButtonList";
import dummyData from '../DummyData/cohortDummyData'
import {applicantsToGraphData} from '../Utils/dataTransform.utils'

const CohortDetailsPage = ({ match }) => {
    const { t } = useTranslation()

    // TODO: replace cohort data in state/api call for cohort by id
    // cohort key format: cohort-X
    let cohort;
    for (var i in dummyData){
        if(i.split("-")[1] === match.params.id) cohort = dummyData[i];
    }

    const sampleData = {
        minority: applicantsToGraphData(cohort.applicants, 'identities'),
        bootcamps: applicantsToGraphData(cohort.applicants, 'bootcamps'),
        employment: applicantsToGraphData(cohort.applicants, "employmentStatus"),
        gender: applicantsToGraphData(cohort.applicants, "gender")
    };
    console.log(sampleData)

    const listOfFilters = [
        {
            text: t('gender_identity'),
            active: false
        },
        {
            text: t('minority_group'),
            active: true
        },
        {
            text: t('bootcamps'),
            active: false
        },
        {
            text: t('employment_status'),
            active: false
        },
    ];

    return (
        <>
            <div className="App">
                <div className="wrapper">
                    <h2>{t('cohort')} {match.params.id} {t('applicants')}</h2>

                    <div className="flexWrapper">
                        <Sidebar>
                            <h3>{t('filter_applicants')}</h3>
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