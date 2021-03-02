import { ICategory } from '../models/ICategory';

export interface ICreateCategory {
    create(categoryTitle: string): Promise<ICategory>;
}