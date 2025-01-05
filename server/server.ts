import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import friendsRouter from './src/routes/friends';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());

app.use('/api/friends', friendsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
