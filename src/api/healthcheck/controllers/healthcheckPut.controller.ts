// @ts-check

import { Controller, OperationId, Put, Route, SuccessResponse, Tags } from 'tsoa'

@Route('/')
@Tags('healthcheck')
export class healthcheckPutController extends Controller {
  /**
   * Put healthcheck
   */
  @SuccessResponse('204')
  @Put('/healthcheck')
  @OperationId('healthcheckPutController')
  static handler () {
    return {
      data: `Service is up and healthy /healthcheck`
    }
  }
}
