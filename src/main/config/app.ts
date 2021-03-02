import { app } from '../protocols/IExpress';
import { setupMiddlewares } from './setupMiddlewares';
import { setupRoutes } from './setupRoutes';

setupRoutes(app);
setupMiddlewares(app);

export { app };