# Users API + Automation Script

This API does an initial data fetching to an external service of [MockAPI](https://mockapi.io/) receiving users, then fetches 2 different data from each of these users, also through the external service.

The response of this API (being it "200: OK") is a combination of the 3 information of each user.

The response returned by the API, accessing the "/users" route is a list of the object below:

![Response Example](https://user-images.githubusercontent.com/78443398/191078668-90bde4eb-275a-4171-8f2c-a3105d937ece.png)

The Automation Script makes a request to the users API, formats the data received to the model below and records everything in a MongoDB database instantiated in Docker

![Response Example 2](https://user-images.githubusercontent.com/78443398/197917107-25cf4aed-2218-45a7-b0c6-ce7b76cff987.png)

## Technologies Used

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Axios](https://axios-http.com/)
- [Mongoose](https://mongoosejs.com/)
- [Jest](https://jestjs.io/)

## Running the Application

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

## Running the Script

- Attention, follow the previous steps to initialize the script.
- For this process you will need to have Docker installed on your machine.

```bash
# Create an instance of MongoDB in Docker
$ docker run --name mongodb -d -p 27017:27017 mongo

# If you want to change the external port of the container,
# remember to also change the environment variable DB_CONN_STRING

# Run the script and the users data will be registered in the database
$ npm run start:dev

# To view the data, access the container
$ docker exec -it mongodb bash

# Access the mongo terminal
$ mongosh

# Select user database
$ use users

# Query the data
$ db.users.find()
```

## Observation Points

- The API response takes an average of 4 MINUTES, please wait. In case of error, it will be informed as a response to the request
