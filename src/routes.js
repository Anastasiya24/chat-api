import { Router } from 'express';
import userRouter from './api/user/user.routes';
import messagesRouter from './api/messages/messages.routes';

const router = Router();

router.use('/user', userRouter);
router.use('/messages', messagesRouter);

export default router;
