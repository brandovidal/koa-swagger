import Koa from 'koa'

import serve from 'koa-static'
import { dirname, join } from 'node:path'

import router from './routes/index.route.ts'

const app = new Koa()

const __dirname = dirname('./')
const staticPath = join(__dirname, 'public')
app.use(serve(staticPath))

app.use(router.routes())
app.use(router.allowedMethods())

const port = 3000
app.listen(port)

console.log(`Server running at http://localhost:${port}`)
