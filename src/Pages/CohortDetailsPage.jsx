import React from "react";
import { useTranslation } from 'react-i18next'

import Sidebar from '../Components/Sidebar'
import ChartMinorityPerCohort from '../Components/ChartMinorityPerCohort';
import BasicButtonList from "../Components/BasicButtonList";
import dummyData from '../DummyData/cohortDummyData'
import { connect } from 'react-redux'
import {applicantsToGraphData} from '../Utils/dataTransform.utils'
import styles from '../Styles/general.module.scss'

const CohortDetailsPage = ({ match, currentChart }) => {
    const { t } = useTranslation()

    // TODO: replace cohort data in state/api call for cohort by id
    // cohort key format: cohort-X
    let cohort;
    for (var i in dummyData) {
        if (i.split("-")[1] === match.params.id) cohort = dummyData[i];
    }
  
    const sampleData = {
        minority: applicantsToGraphData(cohort.applicants, 'identities'),
        bootcamps: applicantsToGraphData(cohort.applicants, 'bootcamps'),
        employment: applicantsToGraphData(cohort.applicants, "employmentStatus"),
        gender: applicantsToGraphData(cohort.applicants, "gender")
    };

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
                    <h2 className={styles.h2}>{t('cohort')} {match.params.id} {t('applicants')}</h2>
                    <div className="flexWrapper">
                        <Sidebar>
                            <h3 className={styles.h3}>{`${t('filter_by')}:`}</h3>
                            {/* TODO: look at how to toggle active filter (router?) */}

                            <BasicButtonList data={listOfFilters} />
                        </Sidebar>

                        {(currentChart === "Gender Identity") && <ChartMinorityPerCohort data={sampleData.minority} />}
                        {(currentChart === "Minority Group") && <ChartMinorityPerCohort data={sampleData.minority} />}
                        {(currentChart === "Bootcamps") && <ChartMinorityPerCohort data={sampleData.minority} />}
                        {(currentChart === "Employment Status") && <ChartMinorityPerCohort data={sampleData.minority} />}

                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    ...state
});

const ConnectedCohortDetailsPage = connect(mapStateToProps)(CohortDetailsPage);

export default ConnectedCohortDetailsPage;