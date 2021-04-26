# Book Finder

![html](https://img.shields.io/github/languages/top/jxhnkndl/google-books-search?style=plastic)
![commit](https://img.shields.io/github/last-commit/jxhnkndl/google-books-search?style=plastic)
![license](https://img.shields.io/static/v1?label=license&message=MIT&color=orange&style=plastic)


## Table of Contents
* [Deployed Application](#deployed-application)
* [Description](#description)
* [Technologies](#technologies)
* [Installation](#installation)
* [Local Database Setup](#local-database-setup)
* [Usage](#usage)
* [Application Demo](#application-demo)
* [License](#license)
* [Contact](#contact)


## Deployed Application
Visit the deployed application here: [Fitness Tracker](https://react-books-finder.herokuapp.com/search)


## Description
This virtual library application offers users a quick and easy way to find and bookmark titles of interest. On the application's main search page, users can input a title and receive a list of potential matches back from the Google Books API. When the user locates a book they would like to read, they can either view the book's details on Google Books or save the book to their virtual library. On the application's saved page, users can see the books they have previously saved. Once a user is finished with a book, it can easily be deleted from their library on the saved page.


## Technologies
* React
* React-Bootstrap
* JavaScript
* Sass/CSS
* Node.js
* Express
* MongoDB
* Mongoose


## Installation
The front-end of the books finder is a single-page application built using the `create-react-app` infrastruture and a variety of supplemental libraries. All of the individual components and source code can be found in `client/src`. Static assets served to the browser are stored in `client/public`. Lastly, `client/build` contains the bundled files in the final production build.  

This application requires Node.js and npm to run locally. To check whether Node.js and npm are installed locally, run:
```
node -v
```
```
npm -v
```
If Node and npm are already installed, the commands above should return version numbers. Visit [Node.js](http://www.nodejs.org/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for full installation details and documentation.  

To install the project and both its front and back end npm dependencies, navigate to the project's root directory and run the following commands from a terminal:
```
npm install
```


To see a complete list of the client-side dependencies, please refer to `client/package.json`. Similarly, to see a complete list of the server-side dependencies, please refer to the root directory's `package.json` file. 


## Local Database Setup

This application uses a MongoDB database to store books saved by the user. The deployed application uses MongoDB Atlas to store its data in the cloud. To run the application locally, MongoDB must be installed and a local database must be created and connected to the application through. `server.js` has been configured to make set up as easy as possible using Node environmental variables.

**Connect a local MongoDB database to the Book Finder:**  
1) Launch MongoDB and create a new database called `books`
2) Navigate the project's root directory
3) Verify that `npm install` has been run
4) Open `server.js`. There are `localdb` and `atlasdb` variables containing the connection strings to either a local database or the application's MongoDB Atlas database. 
5) Note the insertion of variable expressions in `localdb`. These represent environmental variables that will be used to privately store local database credentials.
6) Navigate to the root directory and create a `.env` file. The application's `.gitignore` already knows not to track this file. Here is where local database credentials will be established.
7) Set up two environmental variables: one called `LOCALDB_HOST` set equal to the user's `localhost` or similar counterpart and one called `LOCALDB_NAME` set equal to the name of the local MongoDB database set up for this application (i.e. `books`).
8) Run `npm start` to launch the application. The Mongoose connection is pre-configured to use the user's private environmental variables to connect the application to a local MongoDB database.



The application uses `mongoose.js` to define and enforce a schema on books saved to the `books` collection. The `book.js` file inside the `models` directory contains the model used for saving books. Each book is written to the database as a single document with fields for the book's title, authors, description, image thumbnail, and info link.


## Usage
Once npm packages have been installed and the database has been initialized, the application can be launched by running:
```
npm start
```
Please note that any changes made to the application's source code on the client-side require that a new production build be performed. The `create-react-app` ecosystem has a prebuilt build pipeline using `webpack` and `babel`. Additionally, the `node-sass` compiler has been added to the pipeline to ensure that custom Sass files are properly compiled into the production build.  

To run a new build of the application, navigate to the application's root directory and run:  
```
npm run build
```


## Application Demo
The following video demostrates the application's functionality and user experience:

[![Application Preview](assets/book-finder-demo.gif)](https://drive.google.com/file/d/1RE5NdJeRKPyDjII-ULQTSyZABCY9mwbX/view)


## License
Copyright (c) 2021 J.K. Royston  
Licensed under the [MIT License](https://opensource.org/licenses/MIT).


## Contact
J.K. Royston  
<jkroyston@gmail.com>  
[GitHub](https://www.github.com/jxhnkndl)