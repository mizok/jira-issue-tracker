importScripts("./worker/boot.js");

// const jiraBaseUrl = "https://neutec.atlassian.net";
// const jqlQuery = "project=CPS AND assignee = currentUser()"; // 替換成你的專案代碼
// const maxResults = 20; // 設定要返回的最大結果數量
self.addEventListener("message", (event) => {
  const { type, data } = event.data;
  console.log("got message from client!!!!!", event);

  if (type === "init") {
    // 處理收到的訊息和資料
    sendDataToClient("inited");
  }
});
