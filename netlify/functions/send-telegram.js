const fetch = require("node-fetch"); // Only needed if Node < 18

exports.handler = async function () {
  const BOT_TOKEN = "8456561690:AAGdyXXTWpM_9LKriH6sjsaAz5CSYpiuXF4"; // Replace with your Telegram bot token
  const CHAT_ID = "1730059618";     // Replace with your chat id

  const message = "🚨 Block A Dustbin is FULL! (Test from Netlify)";

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: message
        })
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};
