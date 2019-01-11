import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import authentication from './config/authentication';
import router from './router';
import getDbUri from './helpers/getDbUri';

require('dotenv').config();

const app = express();

const corsOptions = {
  origin: true,
  credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
authentication(app); // sets up passort.js auth routes and session
app.use('/', router);

const API_PORT = process.env.API_PORT || 3001;

mongoose.connect(getDbUri(), { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
