var fs = require('fs');
var applicants = require('./cohortDataRaw');

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
    // split previously applied into arrary
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