import { CreateProductController } from './CreateProductController';
import { fakeProductRequest } from './constants';
import { badRequestResponse } from '../../helpers';
import { MissingParamError } from '../../errors';

let createProduct_sut: CreateProductController;

describe('CreateProduct Controller', () => {
    beforeAll(() => {
        createProduct_sut = new CreateProductController();
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

    test('Should return 400 if no price is provided or price is zero', async () => {
        const responseWithouPrice = await createProduct_sut.handle(fakeProductRequest.withoutPrice);
        expect(responseWithouPrice).toEqual(badRequestResponse(new MissingParamError('price')));
        
        const responsePriceZero = await createProduct_sut.handle(fakeProductRequest.priceIsZero);
        expect(responsePriceZero).toEqual(badRequestResponse(new MissingParamError('price')));
    });
});