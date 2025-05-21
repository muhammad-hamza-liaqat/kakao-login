require('dotenv').config();

const express = require('express');
const app = express();

const requestLogger = require('./middlewares/requestLogger');
const notFoundHandler = require('./middlewares/notFoundHandler');
const myAppRoutes = require('./routes/index.routes');

const port = process.env.PORT || 8000;

app.use(requestLogger);

// app.get('/', (req, res) => {
//   res.send('Welcome to the Nodejs server!');
// });
app.use(myAppRoutes)

app.use(notFoundHandler);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${process.env.PORT}/`);
});

