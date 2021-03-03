import { IController } from '../../presentation/protocols';
import { DbCreateProduct } from '../../data/useCases/CreateProduct/DbCreateProduct';
import { MongoProductsRepository } from '../../infra/db/mongodb/ProductsRepository/ProductRepository';
import { ListProductByNameController } from '../../presentation/controllers/ListProductByName/ListProductByNameController';
import { DbListProductByName } from '../../data/useCases/ListProductByName/DbListProductByName';

export const makeListProductByNameController = (): IController => {
    const productsRepository = new MongoProductsRepository();
    
    const listProductByNameUseCase = new DbListProductByName(productsRepository);

    return new ListProductByNameController(listProductByNameUseCase)
}