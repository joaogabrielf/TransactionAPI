import fastify from 'fastify'
import { env } from './env'
import cookie from '@fastify/cookie'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

void app.register(cookie)

void app.register(transactionsRoutes, {
  prefix: 'transactions'
})

app.listen({ port: env.PORT }).then(() => {
  console.log('HTTP server is running')
}).catch(err => {
  console.error(err)
})
