import { applicantsToGraphData } from '../Utils/dataTransform.utils'

const cohortApplicants = {
  applicants: [{
    "cohort": "",
    "shortlisted": "",
    "applicantID": "",
    "gender": "",
    "pronouns": "",
    "identities": "",
    "heardAbout": "",
    "previouslyApplied": "",
    "employmentStatus": "",
    "seekingJob": "",
    "bootcamps": "",
    "submittedAt": "",
    "token": ""
  }]
}

let emptyGraphData

emptyGraphData = {
    minority: applicantsToGraphData(cohortApplicants.applicants, 'identities'),
    bootcamps: applicantsToGraphData(cohortApplicants.applicants, 'bootcamps'),
    employment: applicantsToGraphData(cohortApplicants.applicants, "employmentStatus"),
    gender: applicantsToGraphData(cohortApplicants.applicants, "gender")
};

export default emptyGraphData