import { Router } from 'express';
import controller from './messages.controller';

const router = Router();

router.get('/list', controller.getMessagesList);
router.post('/new-message', controller.addNewMessage);

export default router;
