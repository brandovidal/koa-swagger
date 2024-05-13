import Router from 'koa-router'

import { healthcheckGetController } from '../controllers/healthcheckGet.controller.ts'
import { healthcheckPutController } from '../controllers/healthcheckPut.controller.ts'

const router = new Router()

router.get('/healthcheck', (ctx, next) => {
  const body = healthcheckGetController.handler()

  ctx.status = 200
  ctx.body = body
})

router.put('/healthcheck', (ctx, next) => {
  const body = healthcheckPutController.handler()

  ctx.status = 200
  ctx.body = body
})

export default router
