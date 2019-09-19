// array to check answers against
// if answer not contained in array, group into "other"
const normalizedAnswers = [
    "Man",
    "Non-binary",
    "Non binary",
    "Woman",
    "Agender",
    "A-gender",

    "LGBTQIA+",
    "Prefer not to disclose",
    "Person of colour",
    "Latino",
    "Person with a disablity",
    "Indigenous person",

    "Employed full time",
    "In school full time",
    "Unemployed and looking for a job",
    "Employed part time",

    "Lighthouse Labs",
    "I have not attended a bootcamp",
    "HackerYou",
    "Bitmaker",
    "BrainStation",
    "University of Toronto",
]

const checkNormalizedAnswers = answer => {
    if(answer === "") return "No Answer"
    else if(!normalizedAnswers.includes(answer)) return "Other"
    else return answer
}

// take in data array (applicants), and categorize by filterKey
// returns: array of objs that can be provided to VictoryJS chart
export const applicantsToGraphData = (applicants, filterKey) => {
    if (applicants === [] || applicants === undefined) return
    
    const dataSetObj = applicants
        .reduce((accumulator, applicant) => (
            accumulator.concat(applicant[filterKey])
        ), [])
        .map(answer => (checkNormalizedAnswers(answer)))
        .reduce((accumulator, category) => {
            if(!accumulator.hasOwnProperty(category)) accumulator[category]= 0
            accumulator[category] ++
            return accumulator;
        }, {})

    return Object.entries(dataSetObj)
        .map(dataSet => (
            {x: dataSet[0], y: dataSet[1]}
        ))
}