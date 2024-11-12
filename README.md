Here's a more detailed and specific `README.md` for your project, explaining how to run both the **frontend** and **backend** components. This will guide a user through setting up the project on their local machine.

```markdown
# User Registration System

This project is a **full-stack** user registration system that allows users to:

- View a list of registered users.
- Add a new user with **Name**, **Email**, and **Date of Birth** fields.
- Update existing user information.
- Delete a user from the list.

The project uses **React.js** for the frontend and **Node.js** with **Express** for the backend. The backend uses **in-memory storage** to simulate database functionality for this example.

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Project Setup](#project-setup)
    - [Frontend Setup](#frontend-setup)
    - [Backend Setup](#backend-setup)
3. [Running the Project](#running-the-project)
4. [API Endpoints](#api-endpoints)
5. [Error Handling](#error-handling)
6. [License](#license)

---

## Technologies Used

- **Frontend**: React.js, Axios
- **Backend**: Node.js, Express.js
- **In-Memory Storage**: No Database (Users are stored in memory)
- **API Communication**: Axios for HTTP requests
- **CORS**: Enabled for frontend-backend communication

---

## Project Setup

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/user-registration.git
cd user-registration
```

### 2. Frontend Setup

The frontend is built with **React.js**. To set up the frontend:

1. Navigate to the `frontend` directory:
   ```bash
   cd Frontend
   ```

2. Install the required dependencies using **npm**:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm run dev
   ```

   The frontend will now be running at **http://localhost:5173**. This will be your user interface where you can view, add, update, and delete users.

### 3. Backend Setup

The backend is built with **Node.js** and **Express.js**. To set up the backend:

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   node src/server.js
   ```

   The backend will now be running at **http://localhost:5000**. This will handle the CRUD operations (Create, Read, Update, Delete) for users.

---

## Running the Project

After setting up both the frontend and backend as described above, you can open your web browser and do the following:

1. Visit **http://localhost:5173** for the frontend interface.
2. The frontend will communicate with the backend at **http://localhost:5000** for user CRUD operations.

### Steps to Use:

1. **View Users**: The list of users will be displayed on the homepage.
2. **Add New User**: Use the form to add a new user with **Name**, **Email**, and **Date of Birth**.
3. **Update User**: Click "Edit" next to a user to modify their information.
4. **Delete User**: Click "Delete" to remove a user from the list.

---

## API Endpoints (Backend)

The backend exposes the following API routes to interact with users:

- **GET** `/api/users`: Fetch all users.
- **POST** `/api/users`: Create a new user.
- **GET** `/api/users/:id`: Fetch a specific user by ID.
- **PUT** `/api/users/:id`: Update an existing user by ID.
- **DELETE** `/api/users/:id`: Delete a user by ID.

### Example API Requests

1. **Get Users** (GET `/api/users`):
   - Fetch all users.
   - **Response**: List of users.
  
2. **Create User** (POST `/api/users`):
   - Request body:
     ```json
     {
       "name": "John Doe",
       "email": "john.doe@example.com",
       "dob": "1990-05-15"
     }
     ```

3. **Update User** (PUT `/api/users/:id`):
   - Request body:
     ```json
     {
       "name": "John Smith",
       "email": "john.smith@example.com",
       "dob": "1992-07-20"
     }
     ```

4. **Delete User** (DELETE `/api/users/:id`):
   - Delete a user by their ID.
   - **Response**: Success or error message.

---

## Error Handling

- **Input Validation**: 
  - The backend checks that all required fields (Name, Email, Date of Birth) are provided when creating or updating a user. If any are missing, a **400 Bad Request** error will be returned.
  
- **User Not Found**: 
  - If a user does not exist for a given ID, the backend returns a **404 Not Found** error.

- **Server Errors**: 
  - Any internal server error will result in a **500 Internal Server Error**.

- **Frontend Error Handling**: 
  - The frontend displays error messages when something goes wrong during CRUD operations (e.g., failed API requests, invalid input).

---
