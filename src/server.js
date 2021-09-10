import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// TODO for get user name
// import cookieParser from 'cookie-parser';
// TODO init db
// import initializeDb from './services/db';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', routes);
app.get('*', function (req, res) {
  res.sendStatus(404);
});

const port = process.env.APP_PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
