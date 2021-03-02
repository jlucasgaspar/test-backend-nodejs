import { IProduct } from "../../domain/models/IProduct";
import { ICreateProductRequest } from "../../domain/useCases/ICreateProduct";

export interface IProductsRepository {
    save(productData: ICreateProductRequest): Promise<IProduct>
}