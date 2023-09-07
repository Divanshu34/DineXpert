const express = require('express');

const appForSendMail = require('./sendmail');
const app = express();

app.use(express.json());

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    response.setHeader('Access-Control-Allow-Methods', '*');
    next();
  });

app.use("/send-mail",appForSendMail);

app.listen(5000, () => {
    console.log('Server started at 5000');
  });