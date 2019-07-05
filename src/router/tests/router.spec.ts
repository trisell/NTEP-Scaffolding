import * as request from 'supertest';
import app from '../../main';

describe('Status Endpoint Test', () => {
    it('should return ok if the app is up', async () => {
        const response = await request(app).get('/status');
        expect(response.text).toEqual('Ok');
    });
});
