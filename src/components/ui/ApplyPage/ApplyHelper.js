export const getAssesmentQuestions = (type, id) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  return fetch(
    `http://localhost:1000/CodeplanetWeb/getAssessmentQuestion/${type}/${id}`,
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const generateJobApplication = (data) => {
  var raw = JSON.stringify({
    ...data,
  });

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow",
  };

  return fetch(
    "http://localhost:1000/CodeplanetWeb/generateApplication/job",
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const submitJobApplication = (data) => {
  var raw = JSON.stringify({
    ...data,
  });

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow",
  };

  return fetch("http://localhost:1000/CodeplanetWeb/apply/job", requestOptions)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
