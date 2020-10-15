export const getResume = (id) => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: headers,
    redirect: "follow",
  };
  return fetch(
    `http://localhost:1000/CodeplanetWeb/getResume/${id}`,
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const addEducation = (data) => {
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
    "http://localhost:1000/CodeplanetWeb/postEducation",
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const addWorkExperience = (data) => {
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
    "http://localhost:1000/CodeplanetWeb/postWorkExperience",
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const addProjects = (data) => {
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
    "http://localhost:1000/CodeplanetWeb/postProject",
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
