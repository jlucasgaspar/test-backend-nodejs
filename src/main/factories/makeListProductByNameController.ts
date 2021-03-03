import { IController } from '../../presentation/protocols';
import { MongoProductsRepository } from '../../infra/db/mongodb/ProductsRepository/ProductRepository';
import { ListProductByNameController } from '../../presentation/controllers/ListProductByName/ListProductByNameController';
import { DbListProductsUseCase } from '../../data/useCases/ListProductByName/DbListProducts';

export const makeListProductByNameController = (): IController => {
    const productsRepository = new MongoProductsRepository();
    
    const listProductsUseCase = new DbListProductsUseCase(productsRepository);

    return new ListProductByNameController(listProductsUseCase)
}