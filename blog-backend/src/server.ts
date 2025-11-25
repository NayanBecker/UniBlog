import { app, BuildServer } from './app';

const start = async () => {
  try {
    await BuildServer();
    await app.listen({ port: 3333, host: '0.0.0.0' });
    console.log('Server is running on http://0.0.0.0:3333');
    console.log('Server is running on http://0.0.0.0:3333/docs');

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();