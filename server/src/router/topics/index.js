import express from 'express';

import get from './get';
import post from './post';
import getById from './get_by_id';
import del from './del';
import put from './put';

const router = express.Router();

router.get('/', get);
router.get('/:topicId', getById);
router.post('/', post);
router.delete('/:topicId', del);
router.put('/:topicId', put);

export default router;
