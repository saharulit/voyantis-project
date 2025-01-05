import { Request, Response } from 'express';
import { friends } from './friendsData';

export const getFriends = async (req: Request, res: Response) => {
  try {
    res.status(200).json(friends);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
