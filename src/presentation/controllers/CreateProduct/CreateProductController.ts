import { MissingParamError } from '../../errors';
import { badRequestResponse } from '../../helpers';
import { IController, IHttpRequest, IHttpResponse } from '../../protocols';

export class CreateProductController implements IController {
    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        if (!httpRequest.body.title) {
            return badRequestResponse(new MissingParamError('title'))
        }

        if (!httpRequest.body.categoryId) {
            return badRequestResponse(new MissingParamError('categoryId'))
        }

        if (!httpRequest.body.description) {
            return badRequestResponse(new MissingParamError('description'))
        }

        if (!httpRequest.body.price) {
            return badRequestResponse(new MissingParamError('price'))
        }

        return new Promise(resolve => resolve({ statusCode: 200, body: null }))
    }
}