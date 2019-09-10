
// take in data array (applicants), and categorize by filterKey
// returns: array of objs that can be provided to VictoryJS chart
export const arrayToGraphData = (applicants, filterKey) => {

    // TODO: make into a more generic helper function to filter a variety of ways?
    const dataSetObj = applicants
        .reduce((accumulator, applicant) => {
            // TODO: write conditional or new function to handle if data at key is string or an array?

            // TODO: return to this, find a cleaner way that doesn't through an error?
            // eslint-disable-next-line
            applicant[filterKey].map( newKey  => {
                if(!accumulator.hasOwnProperty(newKey)) accumulator[newKey]= 0
                accumulator[newKey] ++
            })
            return accumulator;
        }, {})

    return Object.entries(dataSetObj)
        .map(dataSet => (
            {x: dataSet[0], y: dataSet[1]}
        ))

}