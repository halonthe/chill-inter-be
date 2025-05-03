# HariSenin Mission - BE Intermediate 2B

Building API Testing project from scratch.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file, check `.env.example` file.

also you can find the Dumping data in `./src/database` folder:

```
database
 ┗ chill.sql
```

## Installation

make sure you've installed `nodemon` globally, because this project doesn't include nodemon dependencies

```bash
  npm install -g nodemon
  npm install
```

To deploy this project run

```bash
  npm run dev
```

## Folder Structures

```
chill-inter-be
 ┣ src
 ┃ ┣ config
 ┃ ┃ ┗ db.js
 ┃ ┣ controllers
 ┃ ┃ ┗ users.controller.js
 ┃ ┣ database
 ┃ ┃ ┗ chill.sql
 ┃ ┣ models
 ┃ ┃ ┗ users.model.js
 ┃ ┣ routes
 ┃ ┃ ┗ users.route.js
 ┃ ┗ index.js
 ┣ .env
 ┣ .env.example
 ┣ .gitignore
 ┣ package-lock.json
 ┣ package.json
 ┗ README.md
```
