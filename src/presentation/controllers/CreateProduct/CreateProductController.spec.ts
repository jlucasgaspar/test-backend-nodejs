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
});