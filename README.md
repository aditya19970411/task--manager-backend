# task--manager-backend
Task manager backend

To run the server follow below steps
 1. Add the env file with name .env and keys from env.example file
 2. use docker compose file to run postgres or use postgres from local server
 3. isntall node module using yarn install
 4. run server using yarn start:dev for developement mode or yarn build && yarn start for production version


# Backend - Node.js (TypeScript)

This is the **backend** service for the monorepo project. It is a Node.js server built with **Express** and uses **TypeScript** for type safety.

## Table of Contents
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Run in Development](#run-in-development)
- [Run in Production](#run-in-production)

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [Yarn](https://yarnpkg.com/) (v1 or later)
- [TypeScript](https://www.typescriptlang.org/)

### Installation

Clone the repository and install the dependencies for the backend.

```bash
# Clone the monorepo
git clone https://github.com/your-repo/your-monorepo.git

# Navigate to the backend package
cd packages/backend

# Install dependencies
yarn install
