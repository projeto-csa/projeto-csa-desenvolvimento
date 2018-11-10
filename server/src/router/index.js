import express from 'express';
import bodyParser from 'body-parser';

import comments from './comments';

const router = express.Router();

router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send('Home');
});

router.use('/comments', comments);

export default router;
