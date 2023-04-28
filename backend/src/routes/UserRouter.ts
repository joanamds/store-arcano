import * as express from 'express';
import UserController from '../database/controllers/UserController';

const router = express.Router();
const userController = new UserController();

router.get('/:id', userController.getUser.bind(userController));

export default router;