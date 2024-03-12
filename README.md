# Mitosis Faucet Claimer

This tool automates claiming from the Mitosis Testnet faucet, with scheduled tasks for retries and Telegram notifications for updates and error logging.

## Features

- Automatically claims tokens from the Mitosis Testnet faucet.
- Schedules retries for claims: once every 24 hours or upon specific errors.
- Sends claim status updates and error messages directly to a specified Telegram chat.

## Setup

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required npm packages with `npm install`.
4. Set the environment variable `TELEGRAM_BOT_TOKEN` with your Telegram bot token.

## Usage

Run the script using `node index.js` and follow the prompts. Ensure you have set your environment variables correctly for the Telegram integration to work.

### Telegram Integration

- Uses `sendTelegram.js` to send notifications to a Telegram chat.
- Requires a Telegram bot token set as an environment variable `TELEGRAM_BOT_TOKEN`.
- Automatically notifies you of claim successes and errors.

## Dependencies

- axios: Promise-based HTTP client for making requests to the faucet.
- colors: Used for adding color to console logs for better readability.
- cron: Used for scheduling claim retries.
- dotenv: Used to load environment variables from `.env` for the Telegram bot.

## Contributing

Contributions are welcome. Please fork the repository, push your changes to a new branch, and submit a pull request.
