import { resolve } from 'path';
import { IProductsRepository } from '../../../../data/protocols/IProductsRepository';
import { IProduct } from '../../../../domain/models/IProduct';
import { ICreateProductRequest } from '../../../../domain/useCases/ICreateProduct';
import { MongoHelper } from '../helpers/mongoHelper';

export class MongoProductsRepository implements IProductsRepository {
    public async save(productData: ICreateProductRequest): Promise<IProduct> {
        const productsCollection = await MongoHelper.getCollection('products');

        const result = await productsCollection.insertOne(productData);

        return MongoHelper.map(result.ops[0]);
    }
}