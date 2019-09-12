import React from "react";
import { useTranslation } from 'react-i18next'

import Sidebar from '../Components/Sidebar'
import ChartMinorityPerCohort from '../Components/ChartMinorityPerCohort';
import BasicButtonList from "../Components/BasicButtonList";
import dummyData from '../DummyData/cohortDummyData'
import styles from '../Styles/cohortDetailsPage.module.scss'

const CohortDetailsPage = ({ match }) => {
    const { t } = useTranslation()

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
                // eslint-disable-next-line 
                if(identity === "") return
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
                        <ChartMinorityPerCohort data={sampleData.minority} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CohortDetailsPage;