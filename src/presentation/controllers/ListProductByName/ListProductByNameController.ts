import { MissingParamError, InvalidParamError } from '../../errors';
import { badRequestResponse, ensureRequiredFieldsAreNotEmpty, okResponse, serverErrorResponse } from '../../helpers';
import { IController, IHttpRequest, IHttpResponse } from '../../protocols';
import { IListProducts } from '../../../domain/useCases/IListProducts';

export class ListProductByNameController implements IController {
    private readonly listProducts: IListProducts;

    constructor(listProducts: IListProducts) {
        this.listProducts = listProducts;
    }

    public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        try{
            const { title } = httpRequest.body;

            const product = await this.listProducts.listByTitle(title);

            return okResponse(product);
        } catch (error) {
            console.log(error);
            return serverErrorResponse(error);
        }
    }
}