import { okResponse, serverErrorResponse } from '../../helpers';
import { IController, IHttpResponse } from '../../protocols';
import { IListProducts } from '../../../domain/useCases/IListProducts';

export class ListAllProducts implements IController {
    private readonly listProducts: IListProducts;

    constructor(listProducts: IListProducts) {
        this.listProducts = listProducts;
    }

    public async handle(): Promise<IHttpResponse> {
        try{
            const products = await this.listProducts.listAll();

            return okResponse(products);
        } catch (error) {
            console.log(error);
            return serverErrorResponse(error);
        }
    }
}