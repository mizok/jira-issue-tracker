importScripts("./worker/config-cache.js");

let requestInterval;

function sendDataToClient(type, data = {}) {
  self.clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({ type: type, data: data });
    });
  });
}

function getApiUrl() {
  const apiUrl = `${
    CONFIG_CACHE.baseUrl
  }/rest/api/3/search?jql=${encodeURIComponent(CONFIG_CACHE.jql)}&maxResults=${
    CONFIG_CACHE.maxResults
  }`;
  return apiUrl;
}

function requestApi() {
  fetch(getApiUrl())
    .then((response) => response.json())
    .then((data) => {
      sendDataToClient("apiData", data);
    })
    .catch((error) => console.error("Error checking Jira API:", error));
}

function resetApiRequestInterval() {
  clearInterval(requestInterval);
  requestInterval = setInterval(() => {
    requestApi();
  }, CONFIG_CACHE.requestIntervalDuration);
}
