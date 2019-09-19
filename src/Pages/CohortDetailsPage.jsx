import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import Sidebar from '../Components/Sidebar'
import ChartMinorityPerCohort from '../Components/ChartMinorityPerCohort';
import BasicButtonList from "../Components/BasicButtonList";
import Loader from "../Components/Loader";

import styles from '../Styles/general.module.scss'
import emptyGraphData from '../DummyData/emptyGraphData-cohortDetailsPage'
import { applicantsToGraphData } from '../Utils/dataTransform.utils'
import { updateDetailsPage } from '../Utils/actions'
import { request } from '../backend-request'

const CohortDetailsPage = ({ match, currentChart, isLoading, updateDetailsPage }) => {
    const [graphData, setGraphData] = useState(emptyGraphData)
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

    let formattedGraphData

    formattedGraphData = {
        minority: applicantsToGraphData(graphData.applicants, 'identities'),
        bootcamps: applicantsToGraphData(graphData.applicants, 'bootcamps'),
        employment: applicantsToGraphData(graphData.applicants, "employmentStatus"),
        gender: applicantsToGraphData(graphData.applicants, "gender")
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
                           <ChartMinorityPerCohort data={formattedGraphData[currentChart]} />
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