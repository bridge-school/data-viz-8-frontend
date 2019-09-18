import React from "react";
import { useTranslation } from 'react-i18next'

import Sidebar from '../Components/Sidebar'
import ChartMinorityPerCohort from '../Components/ChartMinorityPerCohort';
import BasicButtonList from "../Components/BasicButtonList";
import Loader from "../Components/Loader";

import dummyData from '../DummyData/cohortDummyData'
import { connect } from 'react-redux'
import {applicantsToGraphData} from '../Utils/dataTransform.utils'
import styles from '../Styles/general.module.scss'
import {updateDetailsPage} from '../Utils/actions'

const CohortDetailsPage = ({ match, currentChart, isLoading, updateDetailsPage }) => {
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
            key: "gender",
            text: t('gender_identity'),
            active: false
        },
        {
            key: "minority",
            text: t('minority_group'),
            active: true
        },
        {
            key: "bootcamps",
            text: t('bootcamps'),
            active: false
        },
        {
            key: "employment",
            text: t('employment_status'),
            active: false
        },
    ].sort( (a, b) => {
        if ( a.text < b.text ){
            return -1;
          }
        if ( a.text > b.text ){
            return 1;
          }
        return 0;
    } )

    //if currentChart key not defined, set to first listed filter
    if(currentChart===null) updateDetailsPage(listOfFilters[0].key);

    return (
        <>
            {(isLoading) &&
                <Loader />
            }
            
            <div className="App">
                <div className="wrapper">
                    <h2 className={styles.h2}>{t('cohort')} {match.params.id} {t('applicants')}</h2>
                    <div className="flexWrapper">

                        <Sidebar>
                            <h3 className={styles.h3}>{`${t('filter_by')}:`}</h3>
                            <BasicButtonList data={listOfFilters} />
                        </Sidebar>

                       { (currentChart) &&
                           <ChartMinorityPerCohort data={sampleData[currentChart]} />
                       } 

                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    ...state,
});

const mapDispatchToProps = {
    updateDetailsPage
};

const ConnectedCohortDetailsPage = connect(mapStateToProps, mapDispatchToProps)(CohortDetailsPage);
export default ConnectedCohortDetailsPage;