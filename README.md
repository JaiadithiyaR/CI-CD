# DeployFlow

DeployFlow is a local-only React and Express application that serves as the foundation for a future DevOps showcase. This milestone focuses on clean architecture, maintainability, modularity, and production-minded code quality without introducing Docker, Jenkins, AWS, Nginx, or CI/CD yet.

## Why This Project Exists

DeployFlow is meant to demonstrate how a small local application can be structured like an internal engineering tool before it becomes a deployment pipeline showcase. The project intentionally keeps the domain simple so future milestones can focus on delivery automation, rollout strategy, and operational reliability rather than application complexity.

## Project Overview

The application is split into two independently running parts:

- `frontend/` is a React 19 application built with Vite.
- `backend/` is an Express API that serves product, health, and version data from local files.

The current milestone keeps sample components in JSON, uses local bundled images, and exposes small API contracts that are ready for future deployment automation.

## Architecture

The codebase is organized around a service-first backend and hook-driven frontend.

```text
Browser
  |
  v
React pages -> reusable UI components -> custom hooks -> API services -> Express routes -> controllers -> services -> JSON data
  ^                                                                                |
  |--------------------------------------------------------------------------------|
```

- Controllers only translate requests and responses.
- Services contain business logic and data access.
- Middleware handles logging, 404 responses, and error formatting.
- Frontend data fetching lives in custom hooks instead of UI components.
- Shared API clients are isolated in the services layer.

## Folder Structure

```text
deployflow/
  backend/
    config/
      serverConfig.js
    controllers/
      metaController.js
      productController.js
    data/
      products.json
    middleware/
      errorHandler.js
      logger.js
      notFound.js
    routes/
      metaRoutes.js
      productRoutes.js
    services/
      productService.js
      systemService.js
    utils/
      fileUtils.js
    .env
    package.json
    server.js
  frontend/
    src/
      assets/
        images/
      components/
      context/
      hooks/
      pages/
      services/
      styles/
      App.jsx
      main.jsx
    .env
    index.html
    package.json
    vite.config.js
  README.md
```

## Features

- Professional navigation with dynamic version badge
- Responsive hero section
- Live backend status card with refresh timestamps
- Version information card
- Demo components grid with local images
- Reusable loading skeletons
- Reusable error states
- 404 fallback route
- Centralized API clients and hooks
- Clean backend logging and error handling
- Standardized JSON response envelopes
- Local-only environment configuration

## Screenshots Placeholder

Add screenshots here in a future milestone once the UI stabilizes across desktop, tablet, and mobile breakpoints.

## Tech Stack

- React 19
- Vite
- React Router
- Axios
- Express
- dotenv
- Node.js

## API Documentation

### `GET /api/products`

Returns demo component data from `backend/data/products.json`.

Example response:

```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Laptop Pro 14",
      "category": "Electronics",
      "price": 1200,
      "description": "High performance laptop for productivity, development, and on-the-go collaboration.",
      "image": "laptop.svg",
      "rating": 4.8,
      "stock": "In Stock"
    }
  ],
  "message": "Demo components retrieved successfully"
}
```

### `GET /api/version`

Returns build metadata for the application.

```json
{
  "success": true,
  "data": {
    "application": "DeployFlow",
    "version": "1.0.0",
    "build": "local-dev",
    "commit": "development",
    "environment": "development"
  },
  "message": "Version retrieved successfully"
}
```

### `GET /api/health`

Returns the current backend health payload.

```json
{
  "success": true,
  "data": {
    "application": "DeployFlow",
    "status": "UP",
    "environment": "development",
    "version": "1.0.0",
    "build": "local-dev",
    "node": "v22.x",
    "uptime": "153 seconds",
    "timestamp": "2026-07-27T00:00:00.000Z"
  },
  "message": "Health retrieved successfully"
}
```

### `GET /`

Returns a standard success envelope confirming that the API is running.

```json
{
  "success": true,
  "data": {
    "application": "DeployFlow",
    "environment": "development"
  },
  "message": "DeployFlow API is running"
}
```

## Installation

Install dependencies separately for each app.

```bash
cd deployflow/backend
npm install

cd ../frontend
npm install
```

## Run Locally

Create or update the local environment files if needed:

```bash
backend/.env
PORT=5000

frontend/.env
VITE_API_URL=http://localhost:5000/api
```

Start the backend in one terminal:

```bash
cd deployflow/backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd deployflow/frontend
npm run dev
```

Open the frontend URL printed by Vite. The frontend will call the backend API at the URL defined in `frontend/.env`.

## Deployment Plan

This milestone is intentionally local only. The future delivery path will be introduced in separate milestones and is expected to evolve in this order:

1. Docker the frontend and backend applications.
2. Add Docker Compose for local orchestration.
3. Introduce Jenkins for repeatable build and rollout automation.
4. Connect GitHub Webhooks to trigger delivery workflows.
5. Deploy to AWS EC2.
6. Add Nginx in front of the applications.
7. Implement blue-green deployment with health checks and automatic rollback.

## Future Milestones

The next phases of DeployFlow will introduce:

- Docker
- Docker Compose
- AWS EC2
- Jenkins
- GitHub Webhooks
- Blue-Green Deployment
- Health Checks
- Automatic Rollback

## Notes

- The project intentionally remains local-only in this milestone.
- No authentication, database, Docker, Jenkins, AWS, or Nginx have been added yet.
- The current structure is designed to support future deployment and rollback workflows with minimal rework.