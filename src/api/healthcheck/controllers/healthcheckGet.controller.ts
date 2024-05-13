import {
  Controller,
  Example,
  Get,
  OperationId,
  Route,
  SuccessResponse,
  Tags
} from 'tsoa'

interface healthcheckData {
  data: string
}

@Route('/')
@Tags('healthcheck')
export class healthcheckGetController extends Controller {
  /**
   * Get healthcheck
   */
  @Example({ data: 'Service is up and healthy /healthcheck' }, 'GET healthcheck')
  @SuccessResponse(200, 'success')
  @OperationId('healthcheckGetController')
  @Get('/healthcheck')
  static handler (): healthcheckData {
    return {
      data: `Service is up and healthy /healthcheck`
    }
  }
}
