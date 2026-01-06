# sp0m

A comprehensive web application featuring a robust Node.js backend and a dynamic React frontend. it focus on phishing simulation for security testing and cybersecurity education.

## 🚀 Tech Stack

### Frontend

The frontend is built with modern React tooling for performance and developer experience:

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/) for animations
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Charts**: [Recharts](https://recharts.org/)

### Backend

The backend is a scalable REST API built with Node.js:

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (with [Mongoose](https://mongoosejs.com/))
- **Caching**: [Redis](https://redis.io/) (via `ioredis`)
- **Authentication**: JWT (JSON Web Tokens)
- **Email**: Nodemailer

## 📂 Project Structure

The project is divided into two main directories:

- **`backend/`**: Contains the server-side logic, API endpoints, database models, and controllers.
- **`frontend/`**: Contains the client-side application, including UI components, pages, and logical hooks.

## 🛠️ Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- [MongoDB](https://www.mongodb.com/) (running locally or a cloud instance)
- [Redis](https://redis.io/) (optional, if caching is enabled)

### Installation

1.  **Clone the repository**:

    ```bash
    git clone <repository-url>
    cd sp0m
    ```

2.  **Install Backend Dependencies**:

    ```bash
    cd backend
    npm install
    ```

3.  **Install Frontend Dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

### Configuration

Both the backend and frontend rely on environment variables.

- Create a `.env` file in the `backend` directory .
- Create a `.env` file in the `frontend` directory.

## 🏃‍♂️ Running the Application

To run the full stack locally, you will need to start both the backend and frontend servers.

### 1. Start the Backend

Navigate to the `backend` directory and run:

```bash
npm run dev
```

This will start the server with `nodemon` for hot-reloading. The API should be accessible at `http://localhost:3000` (or your configured port).

### 2. Start the Frontend

Open a new terminal, navigate to the `frontend` directory and run:

```bash
npm run dev
```

This will start the Vite development server, usually accessible at `http://localhost:5173`.

## 📜 Scripts

### Backend

- `npm run dev`: Starts the server in development mode.
- `npm start`: Starts the server in production mode.

### Frontend

- `npm run dev`: Starts the development server.
- `npm run build`: Compiles the application for production.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint to check code quality.
