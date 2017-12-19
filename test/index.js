import http from 'http';
import assert from 'assert';
import dotenv from 'dotenv';

import '../bin/www'; // eslint-disable-line

dotenv.config();

describe('Server is alive', () => {
  it('Should return 200', (done) => {
    http.get(`http://127.0.0.1:${process.env.PORT}/api/_health/`, (res) => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('Server Sample Route', () => {
  it('Object should be { "hi": "there" }', (done) => {
    http.get(`http://127.0.0.1:${process.env.PORT}/api/`, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        data = JSON.parse(data);
        assert.equal('there', data.hi);
        done();
      });
    });
  });
});
