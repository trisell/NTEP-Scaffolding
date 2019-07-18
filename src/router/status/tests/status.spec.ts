import * as request from 'supertest';
import App from '../../../app';
import StatusRouter from '../status.router';

describe('request/new endpoint tests', () => {
  it('it should return "Ok"', async () => {
    const app = new App([
      new StatusRouter(),
    ]);
    const response = await request(app.getServer()).get('/status');
    expect(response.text).toEqual('Ok');
  });
});
