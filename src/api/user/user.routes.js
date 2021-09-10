import { Router } from 'express';
import controller from './user.controller';

const router = Router();

router.get('/user-name', controller.getUserName);
router.post('/edit-user-name', controller.editUserName);

export default router;
