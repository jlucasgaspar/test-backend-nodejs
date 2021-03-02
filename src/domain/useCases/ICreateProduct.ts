import { IProduct } from '../models/IProduct';

export interface ICreateProduct {
    create(productData: Omit<IProduct, 'id'>): Promise<IProduct>;
}