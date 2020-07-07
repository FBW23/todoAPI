## TODO API

This is a small todo API.

##### STEPS

1.  Generate a project using the express generator package -> `npm express-generator todoAPI -no-view --git`

2.  Connect the project to a git repo.
3.  Set up the process we would like our requests to follow. The request comes in app.js, it then gets redirected to the right router and the router calls the correct controller method based on the type of the request (GET, PUT, POST, DELETE, PLAMEN)

4.  Nodemon setup in `package.json`

5.  Setup CORS in `app.js`

6.  Setup error handling middleware in `app.js`

7.  Mongoose setup and data schemas and models.

8.  Make our data validation using `express-validator`

9.  Build proper controllers.

##### FEATURES / LIST OF SHAME

1. Make a custom validator for the password
2. Custom validator for the deadline. Deadline must be bigger than creation date.
3. Custom validator for unique emails/username. We just dont like the mongoose error messages.
