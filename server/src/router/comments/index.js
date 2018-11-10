import express from 'express';

import get from './get';
import post from './post';
import put from './put';
import del from './del';

const router = express.Router();

router.get('/', get);
router.post('/', post);
router.put('/comments/:commentId', put);
router.delete('/comments/:commentId', del);

export default router;
