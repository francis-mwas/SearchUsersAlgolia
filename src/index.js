const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnect = require('./config/dbConfig');
const UserRouter = require('./routes/UserRoutes');

dbConnect();

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/users', UserRouter);
app.use('/api/v1/', UserRouter);

app
  .listen(PORT, () => {
    console.log(`The app is listening on port: ${PORT}`);
  })
  .on('error', (err) => {
    console.log(`An error occur when listening to port: ${PORT}`);
  });

module.exports = app;
