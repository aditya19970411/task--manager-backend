# task--manager-backend
Task manager backend

To run the server follow below steps
 1. Add the env file with name .env and keys from env.example file
 2. use docker compose file to run postgres or use postgres from local server
 3. isntall node module using yarn install
 4. run server using yarn start:dev for developement mode or yarn build && yarn start for production version

 # Node.js TypeScript Project

This is a **Node.js** application built with **TypeScript** for enhanced type safety and developer experience. This project follows a standard structure for Node.js applications with TypeScript and includes basic setup for development and production environments.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Run in Development](#run-in-development)
- [Run in Production](#run-in-production)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or later)
- **Yarn** or **npm**
- **TypeScript**

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-repo/your-project.git

2. Navigate to the project directory:

    ```
    cd your-project

3. Install the project dependencies:

    ```
    yarn install
    # or use npm
    npm install


## Project Structure

    ```bash
    your-project/
    ├── src/                    # Source files for the application
    │   ├── index.ts            # Entry point for the application
    │   ├── routes/             # API route handlers
    │   ├── controllers/        # Controllers for request handling
    │   ├── services/           # Business logic and services
    │   ├── models/             # Database models or data interfaces
    │   └── utils/              # Utility functions
    ├── .env                    # Environment variables (not included in version control)
    ├── package.json            # Project metadata and dependencies
    ├── tsconfig.json           # TypeScript configuration
    ├── .eslintrc.json          # ESLint configuration for linting
    ├── .gitignore              # Files and directories to ignore in version control
    └── README.md               # This file


## Environment Variables

    ```bash
    PORT=4000
    DB_HOST=localhost
    DB_USER=username
    DB_PASSWORD=password
    JWT_SECRET=mysecretkey


## Run in Development

1. Install dependencies (if not done already):

    ```bash
    yarn install

2. Run the development server with hot-reloading:
    
    ```bash
    yarn start:dev


## Run in Production

1. Build the TypeScript code:

    ```bash
    yarn build

2. Start the production server:

    ```bash
    yarn start
