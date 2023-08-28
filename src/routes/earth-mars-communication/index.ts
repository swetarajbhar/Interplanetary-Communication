import { Router } from 'express';
import {sendMessage} from '../../controller/earth-mars-communication/index';

import {loggerMiddleware,responseInterceptor} from '../../middleware/index';

const router = Router();

router.use(loggerMiddleware);
router.use(responseInterceptor);

router.post('/api/earth-mars-comm/message', sendMessage);

export default router;