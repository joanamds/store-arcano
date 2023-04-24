import * as express from 'express';
import ProductsController from '../database/controllers/ProductsController';

const router = express.Router();
const productsController = new ProductsController();

router.get('/', productsController.getAllProducts.bind(productsController));

export default router;