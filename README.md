# University Blog 
![Brazil](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/br.png "Brazil")</br>
Este projeto é o UniBlog, Blog-Universitario!, criado para transformar a forma como os estudantes se conectam, buscam informações, e fazem novas amizades. Nosso objetivo também, é poder eternizar alguns dos melhores momentos de sua passagem pela vida academica!

![United States](https://raw.githubusercontent.com/stevenrskelton/flag-icon/master/png/16/country-4x3/us.png "United States")</br>
This project is UniBlog, the University Blog! Created to transform the way students connect, find information, and build new friendships. Our goal is also to eternalize some of the best moments of your academic journey!
## Features

- User authentication (registration and login)
- Profile management (viewing and editing user profiles)
- Creating and retrieving posts
- Publication feed for users
- Middleware for error handling and request validation

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
   
   cd UniBlog
   ```

2. Install backend-dependencies:
   ```
   cd blog-backend
   npm install
   ```

2.1. Set up the environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.

2.2. Start DB with docker:
   ```
   docker compose up --build
   ```

2.3. Run database migrations:
   ```
   npx prisma migrate dev
   ```

2.4. Start the server:
   ```
   npm run start
   ```


3. Start Front-end
   ```
   yarn dev
   ```

3.1 Install frontend-dependencies:
   ```
   cd blog-frontend
   npm install
   ```
3.2 Start the server:
   ```
   npm run start
   ```

