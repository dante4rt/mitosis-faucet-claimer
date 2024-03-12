require('dotenv').config();
const { default: axios } = require('axios');
const chatid = process.env.TELEGRAM_BOT_USER_ID || '';
const token = process.env.TELEGRAM_BOT_TOKEN || '';
const boturl = `https://api.telegram.org/bot${token}/sendMessage`;

const SendTelegram = async (text) => {
  try {
    const { data } = await axios.post(boturl, {
      chat_id: chatid,
      text: text,
      disable_web_page_preview: true,
    });
    console.log(
      'Sent to Telegram on: ' +
        new Date(data.result.date * 1000).toLocaleString()
    );
  } catch (error) {
    console.error('Failed to send message to Telegram', error);
  }
};

module.exports = { SendTelegram };
