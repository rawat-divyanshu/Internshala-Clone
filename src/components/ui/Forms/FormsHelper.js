export const postJob = (jobDetails) => {
  var raw = JSON.stringify({
    ...jobDetails,
  });

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow",
  };

  return fetch("http://localhost:1000/CodeplanetWeb/post-job", requestOptions)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const postInternship = (internshipDetails) => {
  var raw = JSON.stringify({
    ...internshipDetails,
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
    "http://localhost:1000/CodeplanetWeb/post-internship",
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
