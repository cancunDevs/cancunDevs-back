import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import ddos from 'ddos';

import routes from './routes';

dotenv.config();
const app = express();

// Prevent DoS attack using ddos package
// Every request per user increments an internal count. When the count exceeds the limit,
//  The requests are denied with a HTTP 429 Too Many Requests.
// the parameters burst/limit is reasonable for humans use
//  To know more about the parameters check ddos package page
const ddos_opt = new ddos({burst: 10, limit: 15});
app.use(ddos_opt.express);

// Temporary fix to 304 responses
app.disable('etag');
app.use('/api', routes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Express needs this function's signature to use it as an error handler.
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'staging' ? err : {};

  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
