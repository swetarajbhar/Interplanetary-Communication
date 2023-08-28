import { Router } from 'express';
import {sendMessage} from '../../controller/earth-mars-communication/index';

import LoggerMiddleware from '../../middleware/index';

const router = Router();

router.use(LoggerMiddleware);

router.post('/api/earth-mars-comm/message', sendMessage);

export default router;