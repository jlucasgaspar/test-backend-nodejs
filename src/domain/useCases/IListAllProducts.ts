import { IProduct } from '../models/IProduct';

export interface IListAllProduct {
    list(): Promise<Array<IProduct>>;
}