import { Router } from 'express';
import { getFriends } from '../controllers/friendsController';

const friendsRouter = Router();

friendsRouter.get('/', getFriends);

export default friendsRouter;
