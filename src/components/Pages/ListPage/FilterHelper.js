export const getFilteredInternships = (filterData) => {
  var raw = JSON.stringify({
    ...filterData,
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
    "http://localhost:1000/CodeplanetWeb/filter/internships",
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const getFilteredJobs = (filterData) => {
  var raw = JSON.stringify({
    ...filterData,
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
    "http://localhost:1000/CodeplanetWeb/filter/jobs",
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
