# Create an API for a Booking site

In this project we will create our own API for booking a hotel. We will be able to add customers
to our backend and customers will be able to book a hotel. 

## What you will be doing

This project will allow you to practise using:

> - HTTP methods
> - Database MongoDB CRUD operations
> - MVC Pattern

This project assumes you've already had experience with:

> - Routing Express
> - CRUD Operations
> - MongoDB Schemas
> - Using Schema references

## Tasks

Before starting run `npm install` to install all the required packages. 


## Task 1 - Complete the .env file

1. Create a new `.env` file to store the database environment variables.
   
2. Configure your database env variables. 


## Task 2 - Creating our schemas

### 1. Create a new `CustomerSchema` with the following fields: 

- `firstname` - String
- `lastname` - String 
- `username` - String
- `createdDate` - Date

### 2. Create a new `HotelSchema` with the following fields: 

- `name` - String
- `Address` - String 
- `City` - String
- `Country` - String
- `Price` - Number
- `hasParking` - Boolean

### 3. Create a new `ReservationSchema` with the following fields: 

- `customerId` - ObjectID
- `hotelId` - ObjectID
- `bookedForm` - Date 
- `bookedUntil` - Date


## Task 3 - Creating and configuring controllers

### 1. Customer controller
  1. Create a new `customerController.js` file inside the controllers folder. 
 
  2. import the `customerController` inside the customerRoutes. 

### 2. Hotel controller
  1. Create a new `hotelController.js` file inside the controllers folder. 
 
  2. import the `hotelController` inside the hotelRoutes. 

### 3. Reservation controller
  1. Create a new `reservationController.js` file inside the controllers folder. 
 
  2. import the `reservationController` inside the reservationRoutes. 



## Task 4 - Customer Controller
  1. Create a new controller method `createCustomer()` and add the logic to create a new customer.
  2. Create a new controller method `getCustomers()` and add the logic to list all customers from the database.


## Task 5 - Wire the controller methods to the Customer routes
 1. Wire the createCustomer method to a `POST` endpoint `/create` inside the customerRoutes. 
 2. Wire the getCustomers method to a `GET` endpoint `/list` inside the customerRoutes. 
 
 Example of wiring a controller method: 
 ```javascript
  const controller = require('../controllers/orderController');

  router.get('/', controller.getOrders);
   ```



## Task 4 - Get list of products  (READ)
  1. Create a new `get` endpoint `/list` in `productsRoutes`. 

  2. Use the `find` method to get return a list of all products in the database. 

Example using find

 ```javascript
const teas = await Tea.find(); // all the teas
   ```

## Task 5 - Get product by id (READ)
  1. Create a new `get` endpoint `/:id` in `productsRoutes`. 

  2. Use the `findById` method to return the product with the id specified in the parameters. 

Example using findById

 ```javascript
const tea = await Tea.findById('dsf5464sdsms5d');
   ```

