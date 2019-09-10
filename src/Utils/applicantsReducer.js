import { combineReducers } from 'redux';

const initialState = {
    isLoading: false,
    hasError: false,
    errorMsg: "",
    cohortType: "",
    cohortId: "",
    cohortData: {},
    applicantsFilter: ""
}

// TODO: add action types:
// SET_LOADING_STATE
// SET_ERROR_STATE
// SET_ACTIVE_COHORT_TYPE

const cohortDetailsReducer = (state=initialState, action) => {
    switch (action.type) {
  
      case "SET_ACTIVE_COHORT_ID": {
        return{...state,
            cohortId: action.payload
        }
      }

      case "SET_APPLICANTS_FILTER": {
          return{
            applicantsFilter: action.payload 
          }
      }

      default: {
        return state;
      }

    }
}



// TODO: move this to store js
const rootReducer = combineReducers({
    cohortDetails: cohortDetailsReducer
});

export default rootReducer