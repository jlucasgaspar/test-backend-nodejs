import { IExpress } from '../protocols/IExpress';

import { productsRouter } from '../routes';

export const setupRoutes = (app: IExpress): void => {
    app.use(productsRouter);
}