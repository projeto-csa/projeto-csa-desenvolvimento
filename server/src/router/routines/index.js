import express from 'express';

import get from './get';
import getById from './get_by_id';
import post from './post';
import del from './del';
import put from './put';

const router = express.Router();

router.get('/', get);
router.get('/:routineId', getById);
router.post('/', post);
router.delete('/:routineId', del);
router.put('/:routineId', put);

export default router;
