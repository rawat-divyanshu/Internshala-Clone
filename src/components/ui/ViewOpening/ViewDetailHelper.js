export const getInternDetail = (id) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  return fetch(
    `http://localhost:1000/CodeplanetWeb/internship/${id}`,
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const getJobDetail = (id) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  return fetch(`http://localhost:1000/CodeplanetWeb/job/${id}`, requestOptions)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
