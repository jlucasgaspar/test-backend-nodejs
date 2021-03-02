import { ICategory } from '../models/ICategory';

export interface ICreateCategory {
    create(CategoryData: Omit<ICategory, 'id'>): Promise<ICategory>;
}