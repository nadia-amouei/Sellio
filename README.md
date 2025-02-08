<img src="/client/src/assets/barSync_logo.svg" style="height:100px;" align="center"/>

<h1 align="center">Welcome to Sellio 👋</h1>

<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> Hello and welcome to Sellio!

### Description

sellio is an website which user can upload their second hand staff on it.

## tech stack

barSync is built with a react front end styled with vanilla CSS. The back end runs off an express server linked in to a postgres SQL database using sequelize ORM.

### Please note

You will need to create a `.env` file within the server folder.
This file will need to contain the following details:

SECRET_KEY - secret key

DB_PORT the - port of your database which mongo db

DB_NAME the - name of your mongodb database

SERVER_PORT - the port you would like your server to run on

This project uses [thecocktaildb](https://www.thecocktaildb.com/) API. It uses a premium API key the instructions of how to obtain one can be found on the link (costs £2 a month).

_API_URL_ - here is where you put the api url

_API_KEY_ - api key

## Install

1. cd into the client folder and run:

```sh
npm install
```

2. cd into the server folder and run:

```sh
npm install
```

3. You are now ready to go! Run:

```sh
npm run dev
```

from both the client and server folders.

## Author

👤 **Nadia Amouei**

- Github: [@nadia-amouei](https://github.com/nadia-amouei)

## Show your support

Give a ⭐️ if this project helped you!
