import * as express from 'express';
import LoginController from '../database/controllers/LoginController';

const router = express.Router();
const loginController = new LoginController();

router.post('/', loginController.login.bind(loginController));

export default router;
