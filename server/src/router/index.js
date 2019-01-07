import express from 'express';
import bodyParser from 'body-parser';

import comments from './comments';
import routines from './routines';
import variations from './variations';


const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('Home');
});

router.use('/comments', comments);
router.use('/routines', routines);
router.use('/variations', variations);

export default router;
