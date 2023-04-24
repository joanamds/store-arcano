import * as express from 'express';
import CartHistoryController from '../database/controllers/CartHistoryController';

const router = express.Router();
const cartHistoryController = new CartHistoryController();

router.get('/:id', cartHistoryController.getCarts.bind(cartHistoryController));

export default router;