import { IExpress } from '../protocols/IExpress';
import { bodyParser } from '../middlewares';

export const setupMiddlewares = (app: IExpress): void => {
    app.use(bodyParser);
}