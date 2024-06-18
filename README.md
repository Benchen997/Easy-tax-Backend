# Easy-Tax Backend

Welcome to the Easy-Tax Backend repository. This project is part of the Easy-Taxt web application designed to calculate individual income tax based on user input. The backend handles the business logic and serves the API for the frontend to interact with.

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Setup and Installation](#setup-and-installation)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- Calculate individual income tax based on annual, monthly, or hourly salary.
- Provide tax calculation results via RESTful API.
- Support for different tax brackets and rules.
- Secure handling of user data.

## Technology Stack

- **Node.js**: JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing user and tax data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.
- **Jest**: Testing framework for JavaScript.

## Setup and Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/your-username/easy-tax-backend.git
    cd easy-taxt-backend
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Set up the environment variables. Create a `.env` file in the root directory and add the following:

    ```plaintext
    PORT=5000
    MONGODB_URI=your-mongodb-uri
    ```

4. Start the development server:

    ```sh
    npm start
    ```

5. Run the tests to ensure everything is set up correctly:

    ```sh
    npm run dev
    ```

## API Documentation

### statistics comparison URL
http://localhost:5000/v1/


### Endpoints

#### Calculate Tax

- **URL**: `/statistics`
- **Method**: `GET`
- **Request Param**:

    ```javascript
    
      `http://localhost:5000/v1/statistics/?userTaxableIncome=${userTaxableIncome}&userGrossIncome=${userGrossIncome}`
    
    ```

  - **Response**:

      ```typescript
      interface statistics {
        minTaxableIncome: number;
        maxTaxableIncome: number;
        avgTaxableIncome: number;
        rank: number;
        beatsPercentage: number;
    }
      ```

#### Other Endpoints

More endpoints documentation can be added here.

## Contributing

We welcome contributions! Please read our [Contributing Guidelines](CONTRIBUTING.md) before submitting a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


