const API_BASE_URL = 'http://localhost:8081'
  // process.env.NODE_ENV === "development"
  //   ? ""
  //   : `http://${process.env.REACT_APP_PROJECT_NAME}-backend.bridgeschoolapp.io`;

export const request = (endpoint, method = "GET", body) =>
  fetch(`${API_BASE_URL}/${endpoint}`, {
    method,
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      method,
      body
    }
  });
