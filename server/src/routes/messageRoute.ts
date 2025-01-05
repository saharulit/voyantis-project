import { Router, Request, Response } from 'express';

interface Message {
  [key: string]: any;
}

const queues: Record<string, Message[]> = {};
const router = Router();

// POST /api/{queue_name}
//@ts-ignore
router.post('/:queue_name', (req: Request, res: Response): Response => {
  const { queue_name } = req.params;
  const message: Message = req.body;

  if (!message || typeof message !== 'object') {
    return res
      .status(400)
      .json({ error: 'Invalid message format. Expected JSON.' });
  }

  if (!queues[queue_name]) {
    queues[queue_name] = [];
  }

  queues[queue_name].push(message);
  return res
    .status(201)
    .json({ success: true, message: 'Message added to queue.' });
});
//@ts-ignore
router.get('/queues', (req: Request, res: Response): Response => {
  const queuesList = Object.keys(queues).map((queueName) => ({
    name: queueName,
    messageCount: queues[queueName].length,
  }));
  res.status(200).json(queuesList);
});
// GET /api/{queue_name}?timeout={ms}
//@ts-ignore
router.get('/:queue_name', async (req: Request, res: Response) => {
  const { queue_name } = req.params;
  const timeout: number = parseInt(req.query.timeout as string, 10) || 10000;

  if (!queues[queue_name] || queues[queue_name].length === 0) {
    let messageRetrieved = false;

    const waitForMessage = new Promise<boolean>((resolve) => {
      const interval = setInterval(() => {
        if (queues[queue_name] && queues[queue_name].length > 0) {
          clearInterval(interval);
          resolve(true);
        }
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        resolve(false);
      }, timeout);
    });

    messageRetrieved = await waitForMessage;

    if (!messageRetrieved) {
      return res.sendStatus(204); // No content
    }
  }

  const message = queues[queue_name].shift();
  res.status(200).json(message);
});

export default router;
