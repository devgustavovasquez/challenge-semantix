# Users API

This API does an initial data fetching to an external service of [MockAPI](https://mockapi.io/) receiving users, then fetches 2 different data from each of these users, also through the external service.

The response of this API (being it "200: OK") is a combination of the 3 information of each user.

The response returned by the API, accessing the "/users" route is a list of the object below:

![Response Example](https://user-images.githubusercontent.com/78443398/191078668-90bde4eb-275a-4171-8f2c-a3105d937ece.png)

## Technologies Used

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)

## Running the Server

To run this project on your machine, follow the instructions below:

```bash
# Clone this repository
$ git clone https://github.com/devgustavovasquez/challenge-semantix

# Create an .env file and replace <token> with a valid token from the external service
$ cp .env.example .env

# If you want, you can change the default port of the local API as well

# Access the project folder in the terminal
$ cd challenge-semantix

# Install the dependencies
$ npm install

# Run the application in development mode
$ npm run start:dev

# The server will start on the port defined in .env
```

## Observation Points

- The API response takes an average of 4 MINUTES, please wait. In case of error, it will be informed as a response to the request
