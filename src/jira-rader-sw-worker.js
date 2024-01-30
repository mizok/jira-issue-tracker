function sendDataToClient(type, data = {}) {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ type: type, data: data });
    });
  });
}

function requestApiData(apiUrl) {
  return fetch(apiUrl).then((response) => response.json());
}

self.addEventListener("message", (event) => {
  const { type, data } = event.data;
  // console.log("got message from client!!!!!", event);

  switch (type) {
    case "INIT":
      sendDataToClient("INITED");
      break;
    case "GET_API_DATA":
      requestApiData(data.url)
        .then((responseData) =>
          sendDataToClient("RESPONSE_API_DATA", responseData)
        )
        .catch((error) => {
          let errorMessage = "";
          if (error instanceof Error) {
            const err: Error = error;
            errorMessage = err.message;
          } else {
            errorMessage = `Unknown Error: ${error}`;
          }
          sendDataToClient(
            "GET_API_DATA_ERR",
            new Error(`Service worker get api data failed => ${errorMessage}`)
          );
        });
      break;
  }
});
