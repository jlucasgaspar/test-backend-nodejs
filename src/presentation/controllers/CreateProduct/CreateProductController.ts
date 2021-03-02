import { MissingParamError } from '../../errors';
import { badRequestResponse, ensureRequiredFieldsAreNotEmpty } from '../../helpers';
import { IController, IHttpRequest, IHttpResponse } from '../../protocols';

export class CreateProductController implements IController {
    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const requiredFields = ['title', 'categoryId', 'description', 'price']

        const emptyField = ensureRequiredFieldsAreNotEmpty({
            httpRequest: httpRequest,
            requiredFields: requiredFields
        })

        if (emptyField) {
            return badRequestResponse(new MissingParamError(emptyField));
        }

        return new Promise(resolve => resolve({ statusCode: 200, body: null }))
    }
}