import { ICategory } from '../models/ICategory';

export interface ICreateProduct {
    create(productData: Omit<ICategory, 'id'>): Promise<ICategory>;
}