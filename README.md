![Icon](./icons8-octocat.svg)

# Express-React-TS-Template

A monorepo template for a full-stack application combining **Express** (backend) and **React** (frontend) with **TypeScript** and **Tailwind CSS**. This setup provides an efficient environment for building and testing both the server and client sides together.

## Project Structure

- **root**: Contains the main configuration and scripts for running both the server and client concurrently.
- **client**: React application with TypeScript and Tailwind CSS for building the frontend.
- **server**: Express server with TypeScript for handling the backend API.

## Requirements

- **Node.js** (>= 14.x recommended)
- **npm**

## Creating Your Own Project
To create your own project using this template, follow these steps:

1. **Create a new repository from this template**:
   - Go to the [Express React TypeScript Template repository](https://github.com/saharulit/express-react-ts-template).
   - Click on the **Use this template** button to create a new repository.

2. **Clone your new repository**:
   ```bash
   git clone https://github.com/your-username/your-new-repository.git
   cd your-new-repository

3. Install Dependencies:
    * Once you have cloned your fork, navigate to the project directory if you haven't already: ```cd your-repo-name ```
    * Install the required dependencies: ```npm install ```
  
4. Start Development:
    * You can now start the development server: ```npm run dev```
    * Open your browser and navigate to http://localhost:3010 (or whatever port your server is configured to use) to see your project in action.

- **Client**: Runs on `http://localhost:5173`
- **Server**: Runs on `http://localhost:3000`

### Build the Project

To build both the **client** and **server**:

```bash
npm run build -w client
npm run build -w server
```

### Testing

To run tests for both the client and server:

```bash
npm test
```

## Scripts

Here are the main scripts available:

- **Root**:
  - `npm start`: Runs both the client and server in development mode.
  - `npm test`: Runs tests for both client and server concurrently.

- **Client**:
  - `npm run dev -w client`: Starts the client in development mode.
  - `npm run build -w client`: Builds the client for production.
  - `npm run lint -w client`: Lints the client code.
  - `npm run preview -w client`: Previews the built client application.
  - `npm test -w client`: Runs the client tests with Vitest.

- **Server**:
  - `npm run dev -w server`: Starts the server in development mode with `ts-node`.
  - `npm run start -w server`: Runs the compiled server code.
  - `npm test -w server`: Runs server tests with Jest.


