import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'
import BasicLinkList from '../Components/BasicLinkList'
import ChartApplicantsPerCohort from '../Components/ChartApplicantsPerCohort'
import emptyGraphData from '../DummyData/emptyGraphData-cohortSelectionPage'
import { request } from '../backend-request'

const CohortSelectionPage = () => {
  const [graphData, setGraphData] = useState(emptyGraphData)
  const { t } = useTranslation()
  useEffect(() => {
    const fetchCohortDetails = async () => {
        const response = await request(
            `cohorts?cohortType=front%20end`
        )
        const parsedResponse = await response.json()
        
        setGraphData(parsedResponse.data)
    }
    fetchCohortDetails()
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  const cohortApplicationsGraphData = graphData
    .map((cohort) => (
      {
        x: `${t('cohort')} ${cohort.id.slice(7,9)}`,
        y: cohort.applicants.length
      }
    ))

  const cohortRouteMap = cohortApplicationsGraphData
    .map((cohort) => {
      return {
        disabled: cohort.y === 0,
        name: cohort.x,
        route: (cohort.y === 0) ? "" : `/fed/cohorts/${cohort.x.split(" ")[1]}`
      }
    });

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <BasicLinkList title="Frontend Development Cohorts" data={cohortRouteMap} />
          <ChartApplicantsPerCohort numberOfApplicants={cohortApplicationsGraphData} />
        </div>
      </div>
    </>
  )
}

export default CohortSelectionPage;