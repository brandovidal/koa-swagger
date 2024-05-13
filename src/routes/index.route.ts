import Router from 'koa-router'
import { koaSwagger } from 'koa2-swagger-ui'

import healthcheck from '../api/healthcheck/routes/healthcheck.route.ts'

const router = new Router()

// docs with swagger
router.get(
  '/docs',
  koaSwagger({
    swaggerOptions: { url: 'swagger.json' },
    title: 'API Docs'
  })
)

router.use(healthcheck.routes())

export default router
