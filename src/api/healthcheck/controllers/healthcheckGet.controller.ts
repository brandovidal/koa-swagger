// @ts-check

import { Controller, Example, Get, OperationId, Route, SuccessResponse, Tags } from 'tsoa'

@Route('/')
@Tags('healthcheck')
export class healthcheckGetController extends Controller {
  /**
   * Get healthcheck
   */
  // @SuccessResponse('200', 'success')
  @Get('/healthcheck')
  @OperationId('healthcheckGetController')
  @Example({
    status: 200,
    data: `Service is up and healthy /healthcheck`
  })
  static handler () {
    return {
      data: `Service is up and healthy /healthcheck`
    }
  }
}
