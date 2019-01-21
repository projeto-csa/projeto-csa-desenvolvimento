import express from 'express';

import get from './get';
import getById from './getById';
import getLoggedUser from './getLoggedUser';
import post from './post';
import del from './del';
import put from './put';

const router = express.Router();

router.get('/', get);
router.get('/logged_user', getLoggedUser);
router.get('/:id', getById);
router.post('/', post);
router.delete('/:id', del);
router.put('/:id', put);

export default router;
