function sendDataToClient(type, data = {}) {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ type: type, data: data });
    });
  });
}

function requestApiData(apiUrl) {
  return fetch(apiUrl)
    .then((response) => response.json())
    .catch((error) => {
      let errorMessage = "";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = `Unknown Error: ${error}`;
      }
      return sendDataToClient(
        "GET_API_DATA_ERR",
        new Error(`Service worker get api data failed => ${errorMessage}`)
      );
    });
}

self.addEventListener("message", (event) => {
  const { type, data } = event.data;

  switch (type) {
    case "INIT":
      sendDataToClient("INITED");
      break;
    case "GET_API_DATA":
      requestApiData(data.url).then((responseData) => {
        return sendDataToClient("RESPONSE_API_DATA", responseData);
      });
      break;
  }
});
