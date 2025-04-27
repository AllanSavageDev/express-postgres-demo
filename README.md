# Express + Postgres Demo

A simple backend application built with Node.js (Express) and PostgreSQL, running inside Docker Compose.

## Features

- Express server for RESTful APIs
- PostgreSQL database with Dockerized environment
- Docker Compose orchestration
- Full CRUD operations on `messages` table
- Health check endpoint for production readiness

## How to Run

1. Clone the repo:
   ```bash
   git clone https://github.com/AllanSavageDev/express-postgres-demo.git
   cd express-postgres-demo


# Express + Postgres Demo - Developer Notes

## Initial Setup
- Run `npm init -y` to create `package.json`
- Install dependencies:
  ```bash
  npm install express pg
  ```
- Create `index.js` with Express server and Postgres connection
- Set up `Dockerfile` and `docker-compose.yml`

## Key Commands
- Start app and database:
  ```bash
  docker compose up --build
  ```
- Stop all services:
  ```bash
  docker compose down
  ```

## API Endpoints
- Health check:
  ```
  GET http://localhost:8000/health
  ```
- Fetch all messages:
  ```
  GET http://localhost:8000/messages
  ```
- Insert new message:
  ```bash
  curl -X POST http://localhost:8000/messages \
    -H "Content-Type: application/json" \
    -d '{"content": "Hello from Node!"}'
  ```

## Database Info
- Host: `localhost`
- Port: `5433`
- Database: `postgres`
- Username: `postgres`
- Password: `secret`
- Internal Docker hostname for DB inside the network: `db`

## Notes
- Postgres container maps **host** port `5433` → **container** port `5432` (to avoid conflicts)
- Express connects using `host: 'db'` inside Docker Compose
- `node_modules/` folder is ignored via `.gitignore`
- `.env` file can be added later for cleaner environment variable management (optional)

---

# Future Extensions
- Add `PUT /messages/{id}` to update an existing message
- Add `DELETE /messages/{id}` to delete a message
- Add database migrations (like Knex.js or Sequelize, optional)
- Add authentication (JWT or Basic Auth)
- Add Swagger UI or simple OpenAPI spec
- Add Redis or external cache layer
- Add Docker healthchecks
- Deploy to a real VPS later (optional)
