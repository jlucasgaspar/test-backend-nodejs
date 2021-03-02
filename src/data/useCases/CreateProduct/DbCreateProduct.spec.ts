import { IProduct } from '../../../domain/models/IProduct';
import { ICreateProductRequest } from '../../../domain/useCases/ICreateProduct';
import { IProductsRepository } from '../../protocols/IProductsRepository';
import { DbCreateProduct } from './DbCreateProduct';
import { fakeProductRequest } from './constants'
import { request } from 'http';

let dbCreateProduct_sut: DbCreateProduct;
let fakeProductsRepository: IProductsRepository;

class FakeUsersRepository implements IProductsRepository {
    public async save(productData: ICreateProductRequest): Promise<IProduct> {
        const productWithId = Object.assign({}, productData, { id: 'valid_id' });

        return new Promise(resolve => resolve(productWithId));
    }
}

describe('DbCreateProduct UseCase', () => {
    beforeAll(() => {
        fakeProductsRepository = new FakeUsersRepository();
        dbCreateProduct_sut = new DbCreateProduct(fakeProductsRepository);
    });

    test('should call ProductsRepository with correct values', async () => {
        const saveSpy = jest.spyOn(fakeProductsRepository, 'save');
        await dbCreateProduct_sut.create(fakeProductRequest.valid);
        expect(saveSpy).toHaveBeenCalledWith(fakeProductRequest.valid);
    });

    test('should throw if ProductsRepository throws', async () => {
        jest.spyOn(fakeProductsRepository, 'save')
            .mockReturnValueOnce(new Promise((resolve, reject) => {
                return reject(new Error());
            }));
        const promise = dbCreateProduct_sut.create(fakeProductRequest.valid)
        await expect(promise).rejects.toThrow();
    });

    test('should return a product on success', async () => {
        const product = await dbCreateProduct_sut.create(fakeProductRequest.valid);
        expect(product).toEqual({
            id: 'valid_id',
            title: fakeProductRequest.valid.title,
            categoryId: fakeProductRequest.valid.categoryId,
            description: fakeProductRequest.valid.description,
            price: fakeProductRequest.valid.price
        });
    });
});