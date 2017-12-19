# cancunDevs-back
cancunDevs back end repo.

## Requirements
#### Node.js

This project uses the Node.js version specified in the `.nvmrc` file. In order to use this version use `nvm use`. In case you don't have the version installed, nvm will prompt you with the adequate `nvm install` command.

### npm

This project uses npm version 5.0.0+, if using an older version, package-lock.json will not be generated/updated. You can install the latest version globally by running:
```
$ npm install npm@latest -g
```

## Linting and Unit Testing
#### Linting
Linting is done via ESLint and adheres to the [AirBnB](https://github.com/airbnb/javascript) rules.

We can lint all files within the project (not including files/directories in the `.eslintignore` file) :
```
$ npm run lint
```

## Setting up a local database in Docker
For running on docker it is necessary to install [Docker](https://www.docker.com/), and use the MySQL container you can find [here](https://hub.docker.com/_/mysql/).

After that you need to run the following commands to get your environment ready:

```
$ docker run -p 3307:3306 --name cancundevs-back -e MYSQL_ROOT_PASSWORD=root -d mysql:latest
```

When installation finish, you need to create the DB with name cancundevs-back, and finally run the migrations.


#### Database Migrations
For easier database administration this project uses sequelize. In order to have the latest changes on models applied to your local database, we can run:
```
$ npm run migrate
```
Whenever you need to modify the database schema make sure to create the appropiate migration file by running:
```
$ sequelize migration:create
```
and then editing the file accordingly. Do not modify any of the existing migration files as they won't be executed once they are deployed.

#### Database Seeders
For easier database administration this project uses sequelize. In order to have the latest data applied to your local database, we can run:
```
$ npm run seed-delete
```
```
$ npm run seed
```

## Running the project locally
1. Setup your local database as in previous steps.
1. Create your `.env` file based on the `.env.sample` file. Get the values from the current team.
1. Run

```
$ npm run dev
```

#### Testing
Our unit tests can be written using Mocha. Any unit tests written must be saved within the `/test` directory.

In order to run the tests, we can run the following command:
```
$ npm run test
```
Note that by using this command, it will also run `$ npm run lint` automatically after the tests have been completed.

## Contributing
[Making a new release](CONTRIBUTE.md)
