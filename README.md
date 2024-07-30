# Wallet Application

This is a wallet application with frontend and backend components, allowing users to sign up, sign in, view their balance, and transfer money.

## Features

- User authentication (sign up and sign in)
- View account balance
- Transfer money between users
- User search functionality

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository:**
   ```
   git clone https://github.com/VarshaRani9/WalletApp.git
   ```

2. **Create config.js in frontend and include following :**
   ```
   export const SIGNUP_URL = "<backend_URL>/api/user/signup"
   export const SIGNIN_URL = "<backend_URL>/api/user/signin"   
   export const USERS_URL = "<backend_URL>/api/user/bulk?filter="
   export const MONEY_TRANSFER_URL = "<backend_URL>/api/account/transfer" 
   export const BALANCE_URL = "<backend_URL>/api/account/balance"
   ```

4. **Create config.js in backend**
   ```
   module.exports = {
    JWT_SECRET: <secret_key>,
    PORT: <port>,
    MONGO_URI: <Mongo_uri>,
   };
   ```

   
6. **Navigate to the project directory:**
    ```
    cd wallet-application
    ```

7. **Install frontend dependencies:**
   ```
   cd frontend
   npm install
   ```
   
8. **Install backend dependencies:**
    ```
    cd ../backend
    npm install
    ```
    
## Usage
Start the backend server:
  ```
  cd backend
  node index.js
  ```

Start the frontend development server:
  ```
  cd frontend
  npm run dev
  ```

Access the application:
  Open your browser and go to http://127.0.0.1:5173

## Technology Used:
### Frontend
- React: A JavaScript library for building user interfaces
- React DOM: React package for working with the DOM
- React Router DOM: Declarative routing for React applications
- Axios: Promise based HTTP client for the browser and node.js
- Tailwind CSS: A CSS framework for rapid UI development
  
### Backend
- Node.js: JavaScript runtime for server-side development.
- Express: Web framework for building REST APIs.
- MongoDB: NoSQL database for storing user and account data.
- Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
- JWT (JSON Web Tokens): For secure user authentication and authorization.
- Zod: Schema declaration and validation library
- Body-Parser: Node.js body parsing middleware
- CORS: A node.js package for providing a Connect/Express middleware that can be used to enable CORS

## API Endpoints
### User
- POST /api/user/signup: Register a new user.
- POST /api/user/signin: Login a user.
- GET /api/user/bulk: Get a list of users with optional filtering.
### Account
- GET /api/account/balance: Get the user's current balance.
- POST /api/account/transfer: Transfer money to another user.
