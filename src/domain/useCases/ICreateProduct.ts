import { IProduct } from '../models/IProduct';

export type ICreateProductRequest = Omit<IProduct, 'id'>;

export interface ICreateProduct {
    create(productData: ICreateProductRequest): Promise<IProduct>;
}