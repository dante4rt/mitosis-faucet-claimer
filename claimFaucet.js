const axios = require('axios');
const colors = require('colors');
const { CronJob } = require('cron');

const claimFaucet = async (address) => {
  try {
    const { data } = await axios({
      method: 'GET',
      url: `https://api.expedition.mitosis.org/v1/faucet/${address}`,
    });
    if (data.result && data.result.message === 'ok') {
      console.log(
        colors.green('Claim successful. Will try again in 24 hours.')
      );
      const job = new CronJob(
        '0 0 * * *',
        () => {
          console.log(colors.blue('Retrying claim...'));
          claimFaucet(address);
        },
        null,
        true
      );
      job.start();
    }
  } catch (error) {
    const errorMessage = error.response
      ? error.response.data.message
      : error.message;
    console.log(colors.red('Error:'), errorMessage);

    if (errorMessage === 'Already received asset today') {
      console.log(colors.yellow('Will try again in 1 hour.'));
      const job = new CronJob(
        '0 0 * * * *',
        () => {
          console.log(colors.blue('Retrying now...'));
          claimFaucet(address);
        },
        null,
        true
      );
      job.start();
    } else if (errorMessage.includes('is not integrated to the address')) {
      console.log(colors.cyan('Please link your Twitter account.'));
    } else {
      console.log(colors.magenta('Unknown error.'));
    }
  }
};

module.exports = claimFaucet;