import { MissingParamError } from '../../errors';
import { badRequestResponse } from '../../helpers';
import { IController, IHttpRequest, IHttpResponse } from '../../protocols';

export class CreateProductController implements IController {
    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        if (!httpRequest.body.title) {
            return badRequestResponse(new MissingParamError('title'))
        }

        return new Promise(resolve => resolve({ statusCode: 200, body: null }))
    }
}