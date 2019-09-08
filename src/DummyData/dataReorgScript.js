var fs = require('fs');
var applicants = require('./cohortDataRaw');

// example applicant:
// {
//     "cohort": "cohort-7",
//     "shortlisted": "yes",
//     "applicantID": "3803e908-1c1d-43a6-a485-55a82d7f5fbb",
//     "gender": "Woman",
//     "pronouns": "She/her",
//     "identities": "Person of colour",
//     "heardAbout": "Event",
//     "previouslyApplied": "I have not applied to a Bridge cohort before",
//     "employmentStatus": "Employed full time",
//     "seekingJob": "Yes",
//     "bootcamps": ", Bloc",
//     "submittedAt": "2/12/2019 5:24:49",
//     "token": "f59aa4ef301706499d6ed87697e562bc"
//   }

var dummyCohortData = applicants.reduce( (accumulator, applicant) => {
    // sort applicants by cohort number
    if(accumulator[applicant.cohort]===undefined){
        accumulator[applicant.cohort] = {};

        //NOTE this is hard coded for the time being, since we're only working with front end dev cohort data
        accumulator[applicant.cohort].type = "frontEnd";
        accumulator[applicant.cohort].applicants = [];
    }
    // split identities into array
    applicant.identities = applicant.identities.split(", ")
    // split previously applied into arrary?
    applicant.previouslyApplied = applicant.previouslyApplied.split(", ")
    // split bootcamps into array
    applicant.bootcamps = applicant.bootcamps.split(", ")
    accumulator[applicant.cohort].applicants.push(applicant)
    return accumulator
}, {})


var json = JSON.stringify(dummyCohortData); //convert to string to write to json file

fs.writeFile('cohortDummyData.json', json, 'utf8', function(err) {
    if (err) throw err;
    console.log(dummyCohortData)
    console.log('complete');
}); 