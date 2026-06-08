const axios = require("axios");

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhMjAyM2NzZTk2MDZAaW1zZWMuYWMuaW4iLCJleHAiOjE3ODA5MDUyMDIsImlhdCI6MTc4MDkwNDMwMiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjJiNjFjYTZjLTI5NmItNDdkNi05Y2Q3LWE5OTI0ODViYTExYSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InVubmF0aSBndXB0YSIsInN1YiI6IjE5MDFhOTdlLWI0NTYtNDhlNC1hOGNmLTA1OTU1Njg4ODA5YiJ9LCJlbWFpbCI6ImEyMDIzY3NlOTYwNkBpbXNlYy5hYy5pbiIsIm5hbWUiOiJ1bm5hdGkgZ3VwdGEiLCJyb2xsTm8iOiIyMzAxNDMwMTAwMjU1IiwiYWNjZXNzQ29kZSI6Im55WFFNdSIsImNsaWVudElEIjoiMTkwMWE5N2UtYjQ1Ni00OGU0LWE4Y2YtMDU5NTU2ODg4MDliIiwiY2xpZW50U2VjcmV0IjoiQ1l1VlpLUHBmSmhxcWNYUiJ9.qL9pDoRdaXwBY5yxI7iommn-yQMY9BxfXzdlnRH0A3M";

async function fetchNotifications() {
  try {
    const response = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`
        }
      }
    );

    return response.data.notifications;

  } catch (error) {
    console.error(error.response?.data || error.message);
  }
}

module.exports = fetchNotifications;