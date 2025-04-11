import app from './app'

const start = async () => {
  try {
    await app.listen({ port: 3333, host: '0.0.0.0' })
    console.log('Server running on http://localhost:3333')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()