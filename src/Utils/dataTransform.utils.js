// take in data array (applicants), and categorize by filterKey
// returns: array of objs that can be provided to VictoryJS chart
export const applicantsToGraphData = (applicants, filterKey) => {
    const dataSetObj = applicants
        .reduce((accumulator, applicant) => {
            return [...applicant[filterKey], ...accumulator];
        }, [])
        .reduce((accumulator, category) => {
            // TODO: add check for atypical answer
            if(category === "") category = "No Answer"
            if(!accumulator.hasOwnProperty(category)) accumulator[category]= 0
            accumulator[category] ++
            return accumulator;
        }, {})

    return Object.entries(dataSetObj)
        .map(dataSet => (
            {x: dataSet[0], y: dataSet[1]}
        ))
}