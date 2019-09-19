import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import Sidebar from '../Components/Sidebar'
import ChartMinorityPerCohort from '../Components/ChartMinorityPerCohort';
import BasicButtonList from "../Components/BasicButtonList";
import Loader from "../Components/Loader";

import styles from '../Styles/general.module.scss'
import dummyData from '../DummyData/cohortDummyData'
import {applicantsToGraphData} from '../Utils/dataTransform.utils'
import {updateDetailsPage} from '../Utils/actions'
import { request } from '../backend-request'


// useEffect(() => {
//     // Update the document title using the browser API
//     document.title = `You clicked ${count} times`;
//   });

const CohortDetailsPage = ({ match, currentChart, isLoading, updateDetailsPage }) => {
    // const [isLoading, setIsLoading] = useState(false)
    const [graphData, setGraphData] = useState([])
    const { t } = useTranslation()
    const cohortId = match.params.id

    useEffect(() => {
        const fetchCohortDetails = async () => {
            const response = await request(
                `cohorts/cohort?cohortType=front%20end&cohortNumber=${cohortId}`
            )
            const parsedResponse = await response.json()
            
            setGraphData(parsedResponse.data[0])
        }
        fetchCohortDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cohortId])

    // TODO: replace cohort data in state/api call for cohort by id
    // cohort key format: cohort-X
    let cohort;
    for (var i in dummyData) {
        if (i.split("-")[1] === match.params.id) cohort = dummyData[i];
    }
    console.log(graphData.applicants)
    console.log(cohort.applicants)


    let sampleData

    sampleData = {
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