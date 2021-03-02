import { MongoProductsRepository } from './ProductRepository';
import { MongoHelper } from '../helpers/mongoHelper';

describe('Mongo ProductsRepository', () => {
    beforeAll(async () => {
        await MongoHelper.connect(process.env.MONGO_URL);
    });

    afterAll(async () => {
        await MongoHelper.disconnect();
    });

    beforeEach(async () => {
        const accountCollection = await MongoHelper.getCollection('accounts');
        await accountCollection.deleteMany({});
    });

    test('Should return a product on success', async () => {
        const mongodbProductRepository_sut = new MongoProductsRepository();

        const fakeRequest = {
            title: 'valid_title',
            categoryId: 'valid_categoryId',
            description: 'valid_description',
            price: 10
        }

        const product = await mongodbProductRepository_sut.save(fakeRequest);

        expect(product).toBeTruthy();
        expect(product.id).toBeTruthy();
        expect(product.title).toBe(fakeRequest.title);
        expect(product.categoryId).toBe(fakeRequest.categoryId);
        expect(product.description).toBe(fakeRequest.description);
        expect(product.price).toBe(fakeRequest.price);
    });
})