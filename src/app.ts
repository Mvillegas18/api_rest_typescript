import 'dotenv/config';
import express from 'express';
import cors from 'cors';

export const app = express();
app.use(cors());

const PORT = process.env.PORT ?? 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    });
    