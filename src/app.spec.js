const request = require('supertest');

const app = require('./app');

test('app module should be defined', () => {
  expect(app).toBeDefined();
});

test('GET / should return 200', async () => {
  const response = await request(app).get('/');
  expect(response.statusCode).toBe(200);
});

test('GET /square?string=hello should return 200 and result property in body', async () => {
  const response = await request(app).get('/square?string=hello');
  expect(response.statusCode).toBe(200);
  expect(response.body.result).toBeDefined();
});
