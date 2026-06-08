const axios = require("axios");

const ACCESS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhMjAyM2NzZTk2MDZAaW1zZWMuYWMuaW4iLCJleHAiOjE3ODA5MDE3OTYsImlhdCI6MTc4MDkwMDg5NiwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjNhMjczY2ZjLTE5ZmQtNDU4MC05NGQxLTE4MzlkYzEyMGU4OSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InVubmF0aSBndXB0YSIsInN1YiI6IjE5MDFhOTdlLWI0NTYtNDhlNC1hOGNmLTA1OTU1Njg4ODA5YiJ9LCJlbWFpbCI6ImEyMDIzY3NlOTYwNkBpbXNlYy5hYy5pbiIsIm5hbWUiOiJ1bm5hdGkgZ3VwdGEiLCJyb2xsTm8iOiIyMzAxNDMwMTAwMjU1IiwiYWNjZXNzQ29kZSI6Im55WFFNdSIsImNsaWVudElEIjoiMTkwMWE5N2UtYjQ1Ni00OGU0LWE4Y2YtMDU5NTU2ODg4MDliIiwiY2xpZW50U2VjcmV0IjoiQ1l1VlpLUHBmSmhxcWNYUiJ9.8CsU5FGsSDxY2l2nA0fULCvTFFfUx95VEzEURwEFR1g";

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message
      },
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Log Created Successfully");
    console.log(response.data);

  } catch (error) {
    console.error(
      "Logging Failed:",
      error.response?.data || error.message
    );
  }
}

module.exports = Log;