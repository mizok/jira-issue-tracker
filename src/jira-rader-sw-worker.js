// importScripts("./ngsw-worker.js");

// setInterval(() => {
//   // 檢查 Jira API 並判斷是否發送推播通知
//   fetch("https://your-jira-api-endpoint")
//     .then((response) => response.json())
//     .then((data) => {
//       // 根據 API 返回的數據判斷是否發送推播通知
//       if (data && data.updatedIssues) {
//         // 發送推播通知的邏輯
//         self.registration.showNotification("New Jira Issues", {
//           body: "New issues have been updated in Jira!",
//         });
//       }
//     })
//     .catch((error) => console.error("Error checking Jira API:", error));
// }, 30 * 60 * 1000); // 每隔 30 分鐘檢查一次
