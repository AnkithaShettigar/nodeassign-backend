const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const RegisterRoute = require('./routes/Register');

var mongoURL =
  'mongodb+srv://ankitha12345:0bTm11ECgbcd21CH@cluster0.pw5eemd.mongodb.net/data?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
mongoose
  .connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/api/', RegisterRoute);

app.get('/', (req, res) => {
  res.send('Welcome page');
});

app.listen(PORT, () => {
  console.log(`app is running at ${PORT}`);
});
