import express from 'express';

import get from './get';
import post from './post';
import del from './del';

const router = express.Router();

router.get('/', get);
router.post('/', post);
router.delete('/:routineId', del);

export default router;
