import express from 'express';
import cors from 'cors';
// TODO for get user name
// import cookieParser from 'cookie-parser';
// TODO init db
// import initializeDb from './services/db';
import routes from './routes';

const app = express();

app.use(cors());

app.use('/', routes);
app.get('*', function (req, res) {
  res.sendStatus(404);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});