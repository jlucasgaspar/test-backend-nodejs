import { ICreateProductRequest, ICreateProduct } from '../../../domain/useCases/ICreateProduct';
import { IProduct } from '../../../domain/models/IProduct';
import { IProductsRepository } from '../../protocols/IProductsRepository';

export class DbCreateProduct implements ICreateProduct {
    private readonly productsRepository: IProductsRepository;

    constructor(productsRepository: IProductsRepository) {
        this.productsRepository = productsRepository;
    }

    public async create(productData: ICreateProductRequest): Promise<IProduct> {
        const productExists = await this.productsRepository.getByTitle(productData.title);

        if (productExists) {
            throw new Error(`Produto ${productData.title} já está cadastrado.`)
        }

        const product = await this.productsRepository.save(productData);

        return product;
    }
}