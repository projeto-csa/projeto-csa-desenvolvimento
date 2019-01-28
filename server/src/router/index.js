import express from 'express';
import bodyParser from 'body-parser';

import comments from './comments';
import routines from './routines';
import variations from './variations';
import users from './user';
import topics from './topics';

const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('Home');
});

router.use('/comments', comments);
router.use('/routines', routines);
router.use('/variations', variations);
router.use('/users', users);
router.use('/topics', topics);

export default router;
