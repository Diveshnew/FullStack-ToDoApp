## Project Structure
```
│
├── backend/          # Contains the backend (Node.js, MongoDB)
│   ├── node_modules/
│   ├── db.js
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── types.js
│
├── frontend/         # Contains the frontend (React)
│   ├── node_modules/
│   ├── public
│   ├── src
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   └── vite.config.js
│
├── README.md         # Project instructions
└── .gitignore
```

## Todo application

This project contains a simple TODO application
It has the following features:-

- Anyone can create a todo
- Anyone can see their existing todos
- Anyone can mark a todo as done

Initialize a node project
Put a package.json


## Flow of work and technologies used
```
Express app   // for backend
Zod for validation
Mongoose for mongo connection
MongoDb as the Database
Github as the place to push Code
```
```
2 Components:
- Create Todo
- render Todos
```
```
* Things to Fix
- Infinite requets to get todos
- Not yet implemented update todos
- todos done button
```

## Prerequisites
Before you begin, ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v12+)
- [MongoDB](https://www.mongodb.com/) (Ensure MongoDB is running locally or have access to a MongoDB cloud instance)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/todo-application.git

2. Navigate into the project directory
   ```
   cd todo-application
   ```
3. Navigate to the backend directory:
   ```
   cd backend
   ```

4. Install backend dependencies:
   ```
   npm install
   ```
   
5. Change the connection string from the `db.js` file to your connection string
   ```
   mongoose.connect('your connection string/todos');
   ```
   
6. Backend running
   ```
   node index.js
   ```
   >[!Note]
   > You should be in the backend directory to do this so `cd ../backend/`

7. Open a new terminal and navigate to the frontend directory:
   ```
   cd ../frontend
   ```

8. Install frontend dependencies:
   ```
   npm install
   ```
   
9. Start the React development server:
    ```
    npm run dev
    ```
    >[!Note]
   > You should be in the frontend directory to do this so `cd ../frontend/`
