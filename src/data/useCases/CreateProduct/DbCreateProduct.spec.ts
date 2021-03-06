import { IProduct } from '../../../domain/models/IProduct';
import { ICreateProductRequest } from '../../../domain/useCases/ICreateProduct';
import { IProductsRepository } from '../../protocols/IProductsRepository';
import { DbCreateProduct } from './DbCreateProduct';
import { fakeProductRequest } from './constants'
import { MongoProductsRepository } from '../../../infra/db/mongodb/ProductsRepository/ProductRepository';

let mongodbProductRepositoy: MongoProductsRepository;
let fakeProductsRepository: IProductsRepository;
let dbCreateProduct_sut: DbCreateProduct;

class FakeProductsRepository implements IProductsRepository {
    private readonly fakeArray: Array<IProduct | null> = [];
    private readonly mongodbProductRepositoy: MongoProductsRepository;

    constructor(mongodbProductRepositoy: MongoProductsRepository) {
        this.mongodbProductRepositoy = mongodbProductRepositoy;
    }

    public async save(productData: ICreateProductRequest): Promise<IProduct> {
        const productWithId = Object.assign({}, productData, { id: 'valid_id' });

        this.fakeArray.push(productWithId);

        return new Promise(resolve => resolve(productWithId));
    }

    public async getByTitle(title: string): Promise<IProduct | null> {
        const productExists = this.fakeArray.find(product => {
            return product.title === title
        })

        if (productExists) {
            throw new Error()
        }

        return new Promise(resolve => resolve(null));
    }
}

describe('DbCreateProduct UseCase', () => {
    beforeEach(() => {
        mongodbProductRepositoy = new MongoProductsRepository();
        fakeProductsRepository = new FakeProductsRepository(mongodbProductRepositoy);
        dbCreateProduct_sut = new DbCreateProduct(fakeProductsRepository);
    });

    test('should call ProductsRepository with correct values', async () => {
        const saveSpy = jest.spyOn(fakeProductsRepository, 'save');
        await dbCreateProduct_sut.create(fakeProductRequest.valid);
        expect(saveSpy).toHaveBeenCalledWith(fakeProductRequest.valid);
    });

    test('should throw an error if product title already exists', async () => {
        await dbCreateProduct_sut.create(fakeProductRequest.valid);
        const promise = dbCreateProduct_sut.create(fakeProductRequest.valid);
        await expect(promise).rejects.toThrow();
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