# University Blog - UNIBLOG

This project is a university-focused blog API built with Node.js, Fastify, Prisma, PostgreSQL, and TypeScript. It allows users to create posts similar to Twitter, manage their profiles, and authenticate securely.


## Technologies Used

- **Node.js**: JavaScript runtime for building the API.
- **Fastify**: Fast and low-overhead web framework for Node.js.
- **Prisma**: ORM for database management.
- **PostgreSQL**: Relational database for storing user and post data.
- **TypeScript**: Superset of JavaScript that adds static types.

## Getting Started

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

4. Start DB with docker:
   ```
   docker compose up --build
   ```

5. Run database migrations:
   ```
   npx prisma migrate dev
   ```

6. Start the server:
   ```
   npm run start
   ```


7. Start Front-end
   ```
   yarn dev
   ```