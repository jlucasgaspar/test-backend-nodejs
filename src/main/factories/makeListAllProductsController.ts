import { IController } from '../../presentation/protocols';
import { MongoProductsRepository } from '../../infra/db/mongodb/ProductsRepository/ProductRepository';
import { DbListProductsUseCase } from '../../data/useCases/ListProductByName/DbListProducts';
import { ListAllProducts } from '../../presentation/controllers/ListAllProducts/ListProductByNameController';

export const makeListAllProductsController = (): IController => {
    const productsRepository = new MongoProductsRepository();
    
    const listProductByNameUseCase = new DbListProductsUseCase(productsRepository);

    return new ListAllProducts(listProductByNameUseCase);
}