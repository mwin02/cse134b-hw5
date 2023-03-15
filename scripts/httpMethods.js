async function postRequest(data) {
  const options = {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  let response;
  try {
    response = await fetch("https://httpbin.org/post", options);
  } catch (err) {
    console.log(err);
    return null;
  }
  if (response.ok) {
    let responseJson = await response.json();
    return responseJson;
  } else {
    return null;
  }
}

async function getRequest(data) {
  const options = {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
  };
  let response;
  try {
    response = await fetch(
      `https://httpbin.org/get?id=${data.id}&name=${data.name}`,
      options
    );
  } catch (err) {
    return null;
  }
  if (response.ok) {
    let responseJson = await response.json();
    return responseJson;
  } else {
    return null;
  }
}

async function putRequest(data) {
  const options = {
    method: "PUT", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  let response;
  try {
    response = await fetch("https://httpbin.org/put", options);
  } catch (err) {
    return null;
  }
  if (response.ok) {
    let responseJson = await response.json();
    return responseJson;
  } else {
    return null;
  }
}

async function deleteRequest(data) {
  const options = {
    method: "DELETE", // *GET, POST, PUT, DELETE, etc.
  };
  let response;
  try {
    response = await fetch(
      `https://httpbin.org/delete?id=${data.id}&name=${data.name}`,
      options
    );
  } catch (err) {
    return null;
  }
  if (response.ok) {
    let responseJson = await response.json();
    return responseJson;
  } else {
    return null;
  }
}

export { postRequest, getRequest, putRequest, deleteRequest };
