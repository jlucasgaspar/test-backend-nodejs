import { CreateProductController } from './CreateProductController';
import { fakeProductRequest } from './constants';
import { badRequestResponse } from '../../helpers';
import { InvalidParamError, MissingParamError } from '../../errors';
import { ICreateProduct, ICreateProductRequest } from '../../../domain/useCases/ICreateProduct';
import { IProduct } from '../../../domain/models/IProduct';

let createProduct_sut: CreateProductController;
let fakeCreateProductUseCase: FakeCreateProductUseCase;

class FakeCreateProductUseCase implements ICreateProduct {
    public async create(request: ICreateProductRequest): Promise<IProduct> {
        const productWithId = Object.assign({}, request, { id: 'valid_id' });

        return new Promise(resolve => resolve(productWithId));
    }
}

describe('CreateProduct Controller', () => {
    beforeAll(() => {
        fakeCreateProductUseCase = new FakeCreateProductUseCase();
        createProduct_sut = new CreateProductController(fakeCreateProductUseCase);
    })

    test('Should return 400 if no title is provided', async () => {
        const response = await createProduct_sut.handle(fakeProductRequest.withoutTitle);
        expect(response).toEqual(badRequestResponse(new MissingParamError('title')));
    });

    test('Should return 400 if no categoryId is provided', async () => {
        const response = await createProduct_sut.handle(fakeProductRequest.withoutCategoryId);
        expect(response).toEqual(badRequestResponse(new MissingParamError('categoryId')));
    });
    
    test('Should return 400 if no description is provided', async () => {
        const response = await createProduct_sut.handle(fakeProductRequest.withoutDescription);
        expect(response).toEqual(badRequestResponse(new MissingParamError('description')));
    });

    test('Should return 400 if no price is provided or price is zero', async () => {
        const responseWithouPrice = await createProduct_sut.handle(fakeProductRequest.withoutPrice);
        expect(responseWithouPrice).toEqual(badRequestResponse(new MissingParamError('price')));
        
        const responsePriceZero = await createProduct_sut.handle(fakeProductRequest.priceIsZero);
        expect(responsePriceZero).toEqual(badRequestResponse(new MissingParamError('price')));
    });

    test('Should return 400 if no price is string', async () => {
        const response = await createProduct_sut.handle(fakeProductRequest.priceIsString);
        expect(response).toEqual(badRequestResponse(new InvalidParamError('preço não é tipo number.')));
    });
});