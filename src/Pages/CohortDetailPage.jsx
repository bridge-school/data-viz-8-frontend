import React from "react";

function CohortDetailPage({ match }) {
    return (
        <>
            <div className="App">
                <p>Cohort Details Page: {match.params.id} </p>
            </div>
        </>
    )
}

export default CohortDetailPage;
