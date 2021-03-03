import { IProduct } from '../models/IProduct';

export interface IListProducts {
    listByTitle(title: string): Promise<IProduct | null>;
}