import express from 'express';

import get from './get';
import post from './post';
import del from './del';
import put from './put';

const router = express.Router();

router.get('/', get);
router.post('/', post);
router.delete('/:routineId', del);
router.put('/:routineId', put);

export default router;
