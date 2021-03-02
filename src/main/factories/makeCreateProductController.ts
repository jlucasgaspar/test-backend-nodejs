import { IController } from '../../presentation/protocols';
import { DbCreateProduct } from '../../data/useCases/CreateProduct/DbCreateProduct';
import { MongoProductsRepository } from '../../infra/db/mongodb/ProductsRepository/ProductRepository';
import { CreateProductController } from '../../presentation/controllers/CreateProduct/CreateProductController';

export const makeCreateProductController = (): IController => {
    const productsRepository = new MongoProductsRepository();
    
    const createProductUseCase = new DbCreateProduct(productsRepository);

    return new CreateProductController(createProductUseCase)
}