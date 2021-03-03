import { router } from '../protocols/IExpress';
import { adaptRoute } from '../adapters/routeAdapter';

import { makeCreateProductController } from '../factories/makeCreateProductController';
import { makeListProductByNameController } from '../factories/makeListProductByNameController';
import { makeListAllProductsController } from '../factories/makeListAllProductsController';

router.post('/products', adaptRoute(makeCreateProductController()))
router.get('/products', adaptRoute(makeListAllProductsController()))
router.get('/product/:title', adaptRoute(makeListProductByNameController()))

export const productsRouter = router;