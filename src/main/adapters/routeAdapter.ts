import { IRequest, IResponse } from '../protocols/IExpress'
import { IController, IHttpRequest } from '../../presentation/protocols'

export const adaptRoute = (controller: IController) => {
    return async (req: IRequest, res: IResponse) => {
        const httpRequest: IHttpRequest = {
            body: req.body
        }

        const httpResponse = await controller.handle(httpRequest)

        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}