import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const { Router } = express;

module.exports = () => {
  const api = Router();

  // add middleware here
  api.use(logger('dev'));
  api.use(bodyParser.json());
  api.use(bodyParser.urlencoded({ extended: false }));
  api.use(cookieParser());
  api.use(cors());

  return api;
};
