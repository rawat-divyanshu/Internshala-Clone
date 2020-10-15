export const googleLogin = (TokenId) => {
  var raw = JSON.stringify({
    TokenId,
    isGoogleLogin: 1,
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
    "http://localhost:1000/CodeplanetWeb/user-signup",
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const userLogin = (userData) => {
  var raw = JSON.stringify({
    ...userData,
  });

  var headers = new Headers();
  headers.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: headers,
    body: raw,
    redirect: "follow",
  };

  return fetch("http://localhost:1000/CodeplanetWeb/user-login", requestOptions)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};

export const employerLogin = (employerData) => {
  var raw = JSON.stringify({
    ...employerData,
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
    "http://localhost:1000/CodeplanetWeb/employer-login",
    requestOptions
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((error) => console.log("error", error));
};
