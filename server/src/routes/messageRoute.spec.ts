import request from 'supertest';
import express from 'express';
import router from './messageRoute';

const app = express();
app.use(express.json()); // To parse JSON request bodies
app.use('/api', router);

describe('API Routes', () => {
  it('should successfully add a message to the queue and return 201', async () => {
    const message = { text: 'Test message' };
    const response = await request(app).post('/api/testQueue').send(message);

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe('Message added to queue.');
  });

  // Note: Additional tests are required, such as:
  // - Verifying the GET /queues endpoint returns the correct queues
  // - Testing GET /api/{queue_name} to retrieve messages
  // - Checking that the queue doesn't allow posting invalid messages
  // - Verifying message retrieval after waiting for a timeout
});
