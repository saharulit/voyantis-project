import request from 'supertest';
import express from 'express';
import { friends } from './friendsData';
import { getFriends } from './friendsController';

const app = express();
app.get('/api/friends', getFriends);

describe('GET /api/friends', () => {
  it('should return a list of friends with status 200', async () => {
    const response = await request(app).get('/api/friends');
    
    expect(response.status).toBe(200);
    expect(response.body).toEqual(friends);
  });
});
