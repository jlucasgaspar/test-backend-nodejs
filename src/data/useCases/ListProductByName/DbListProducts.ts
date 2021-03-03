import { IListProducts } from '../../../domain/useCases/IListProducts';
import { IProduct } from '../../../domain/models/IProduct';
import { IProductsRepository } from '../../protocols/IProductsRepository';

export class DbListProductsUseCase implements IListProducts {
    private readonly productsRepository: IProductsRepository;

    constructor(productsRepository: IProductsRepository) {
        this.productsRepository = productsRepository;
    }

    public async listByTitle(title: string): Promise<IProduct | null> {
        const product = await this.productsRepository.getByTitle(title);

        return product;
    }

    public async listAll(): Promise<Array<IProduct | null>> {
        const products = await this.productsRepository.getAll();

        return products;
    }
}