import { app } from '../protocols/IExpress';
import { setupMiddlewares } from './setupMiddlewares';
import { setupRoutes } from './setupRoutes';

setupMiddlewares(app);
setupRoutes(app);

export { app };