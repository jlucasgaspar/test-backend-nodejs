import { router } from '../protocols/IExpress';
import { adaptRoute } from '../adapters/routeAdapter';
import { makeCreateProductController } from '../factories/makeCreateProductController';

router.post('/products', adaptRoute(makeCreateProductController()))