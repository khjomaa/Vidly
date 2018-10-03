# Vidly

### Introduction
This project is the backend of Vidly, an imaginary video rental app.

This project is implemented by Node.js

###  Install the dependencies
Run the command `npm i`

### Run the tests
Run the command `npm test`

### Start the server
`node index.js`

OR `nodemon index.js`

This will launch a server at port 3000. If port is used, you can set a different one.

### Environment Variables
On Mac:

`export vidly_jwtPrivateKey=<your secure key>`
`export vidly_db=<Your MongoDB URL>`
On windows:

`set vidly_jwtPrivateKey=<your secure key>`
`set vidly_db=<Your MongoDB URL>`

### Routes:
* Users:
1. POST   /api/users (to register)
2. POST   /api/auth (to login)
3. GET    /api/users/me (to get current user)

* Genres:
1. GET    /api/genres
2. GET    /api/genres/:id
3. POST   /api/genres
4. PUT    /api/genres/:id
5. DELETE /api/genres/:id

* Customers:
1. GET    /api/customers
2. GET    /api/customers/:id
3. POST   /api/customers
4. PUT    /api/customers/:id
5. DELETE /api/customers/:id

* Movies:
1. GET    /api/movies
2. GET    /api/movies/:id
3. POST   /api/movies
4. PUT    /api/movies/:id
5. DELETE /api/movies/:id

* Rentals:
1. GET    /api/rentals
2. GET    /api/rentals/:id
3. POST   /api/rentals

* Returns:
1. POST    /api/returns