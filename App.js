const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const sleepData = [];

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/add-sleep', (req, res) => {
  const sleepDuration = parseFloat(req.body.duration);
  const sleepDate = req.body.date;

  
    sleepData.push({ date: sleepDate, duration: sleepDuration });
    
    console.log('Sleep data added:', sleepDate, sleepDuration);
    res.send('Sleep data added successfully!');
});

app.get('/sleep-data', (req, res) => {
  res.sendFile(__dirname + '/public/sleep-data.html');
});

app.get('/api/sleep-data', (req, res) => {
  res.json(sleepData);
});

app.listen(PORT, () => {
  console.log(`Sleep tracker app is running on http://localhost:${PORT}`);
});
