# BackEnd-final-project-E05-B

# Project 3: E-commerce Platform
## Description
-A back-end e-commerce app featuring shopping cart, payment processing, and product management.

### Technologies
- Node.js
- Express.js
- MongoDB
- Express Validator
- bcrypt.js



## Endpoints:

- GET /products: Get a list of all products
- POST /products: Create a new product
- GET /products/:id: Get details about a specific product
- PUT /products/:id: Update a specific product
- DELETE /products/:id: Delete a specific product
- POST /users: Create a new user account
- POST /login: Log in to the platform
- POST /logout: Log out of the platform
- GET /cart: Get the contents of a user's shopping cart
- POST /cart: Add a product to a user's shopping cart
- DELETE /cart/:id: Remove a product from a user's shopping cart
- POST /checkout: Complete a purchase and place an order
## Models:

- Product: Represents a product for sale, with fields like name, description, price, and quantity
- User: Represents a user account, with fields like email, username, and password
- Order: Represents an order placed by a user, with fields like total price and date placed
## Database Relations:
- 
- An Order can have many Products
- A User can have many Orders
- A Product can belong to many Orders (through an Order_Products table)
## Express Validator:

- Validate that a new Product has a unique name and a positive price
- Validate that a new User has a unique email address and a strong password
## Authentication:
- 
- Use JSON Web Tokens (JWTs) to authenticate users
- Hash user passwords before storing them in the database
- Check JWTs on protected routes to ensure users are authenticated
