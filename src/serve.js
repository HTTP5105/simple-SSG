import express from 'express';
import { config } from './config.js';
const app = express();
const port = 3000;

app.use(express.static(config.dev.outdir));

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});