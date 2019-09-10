import React from "react";
import { useTranslation } from 'react-i18next'
import BasicLinkList from '../Components/BasicLinkList'
import ChartApplicantsPerCohort from '../Components/ChartApplicantsPerCohort'
import dummyData from '../DummyData/cohortDummyData'

const CohortSelectionPage = () => {
  const { t } = useTranslation()
  //TODO: replace this with cohort type API call
  const cohorts = [];
  for (var i in dummyData){
    if(dummyData[i].type === "frontEnd"){
      dummyData[i].cohortNumber = i.split("-")[1];
      cohorts.push(dummyData[i]);
    }
  }
  cohorts.sort((a, b) => (a.cohortNumber - b.cohortNumber));

  const cohortApplicationsGraphData = cohorts
    .map((cohort) => (
      {
        x: `${t('cohort')} ${cohort.cohortNumber}`,
        y: cohort.applicants.length
      }
  ))

  const cohortRouteMap = cohortApplicationsGraphData
    .map((cohort) => {
      return {
        disabled: cohort.y === 0,
        name: cohort.x,
        route: (cohort.y === 0) ? "" : "/fed/cohorts/" + cohort.x.split(" ")[1]
      }
    });

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <ChartApplicantsPerCohort numberOfApplicants={cohortApplicationsGraphData} />
          <BasicLinkList title="Frontend Development Cohorts" data={cohortRouteMap} />
        </div>
      </div>
    </>
  )
}

export default CohortSelectionPage;
