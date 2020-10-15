export const getPostedJobs = (CompanyId, Type) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: headers,
  };

  return fetch(
    `http://localhost:1000/CodeplanetWeb/getApplicationList/${CompanyId}/${Type}`,
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const getPostedInternships = (CompanyId, Type) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: headers,
  };

  return fetch(
    `http://localhost:1000/CodeplanetWeb/getApplicationList/${CompanyId}/${Type}`,
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const closeJob = (CompanyId, Id) => {
  var raw = JSON.stringify({
    CompanyId: CompanyId,
    JobId: Id,
  });
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
    headers: headers,
    body: raw,
  };

  return fetch("http://localhost:1000/CodeplanetWeb/closeJob", requestOptions)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const closeInternship = (CompanyId, Id) => {
  var raw = JSON.stringify({
    CompanyId: CompanyId,
    InternshipId: Id,
  });

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "DELETE",
    redirect: "follow",
    headers: headers,
    body: raw,
  };

  return fetch(
    `http://localhost:1000/CodeplanetWeb/closeInternship`,
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
