# Mitosis Faucet Claimer

The Mitosis Faucet Claimer is a Node.js application designed to automate the process of claiming assets from the Mitosis faucet. It supports scheduling subsequent claims and handling specific errors by reattempting the claim process under certain conditions, such as "Already received asset today". The tool also prompts users for their address and provides feedback through colored console messages.

## Prerequisites

Before running the Mitosis Faucet Claimer, ensure you have the following installed on your system:

- Node.js (v12.x or higher recommended)
- npm (usually comes with Node.js)

## Installation

To get started with the Mitosis Faucet Claimer, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/dante4rt/mitosis-faucet-claimer.git
```

2. Navigate into the cloned repository:

```bash
cd mitosis-faucet-claimer
```

3. Install the required npm packages:

```bash
npm install
```

## Usage

To use the Mitosis Faucet Claimer, run the following command in the terminal:

```bash
node index.js
```

Follow the prompts to enter your address. The application will then attempt to claim from the faucet. Depending on the response from the faucet, it might schedule retry attempts.

### Handling Errors

The application is designed to handle specific errors:

- If the faucet has already been claimed for the day, it schedules another attempt in 24 hours.
- If the address is not integrated with a Twitter account, it prompts the user to do so.
- For any other errors, it displays an "Unknown error" message.

## Contributing

Contributions to the Mitosis Faucet Claimer are welcome. Please feel free to fork the repository, make your changes, and submit a pull request.
