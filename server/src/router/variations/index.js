import express from 'express';

import get from './get';
import post from './post';
import getById from './get_by_id';
import put from './put';

const router = express.Router();

router.get('/', get);
router.get('/:variationId', getById);
router.post('/', post);
router.put('/:variationId', put);

export default router;
