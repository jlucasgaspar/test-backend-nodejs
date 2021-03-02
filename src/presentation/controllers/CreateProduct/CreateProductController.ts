import { MissingParamError, InvalidParamError } from '../../errors';
import { badRequestResponse, ensureRequiredFieldsAreNotEmpty } from '../../helpers';
import { IController, IHttpRequest, IHttpResponse } from '../../protocols';
import { ICreateProduct } from '../../../domain/useCases/ICreateProduct';

export class CreateProductController implements IController {
    private readonly createProduct: ICreateProduct;

    constructor(createProduct: ICreateProduct) {
        this.createProduct = createProduct;
    }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const requiredFields = ['title', 'categoryId', 'description', 'price']

        const emptyField = ensureRequiredFieldsAreNotEmpty({
            httpRequest: httpRequest,
            requiredFields: requiredFields
        })

        if (emptyField) {
            return badRequestResponse(new MissingParamError(emptyField));
        }

        const { title, description, categoryId, price } = httpRequest.body;

        if (typeof price !== 'number') {
            return badRequestResponse(new InvalidParamError('preço não é tipo number.'))
        }

        const product = await this.createProduct.create({ title, description, categoryId, price });

        return new Promise(resolve => resolve({ statusCode: 200, body: null }))
    }
}