const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/log-parser', (req, res) => {
  const file = req.body.file;
  console.log(file)
  if (!file) {
    return res.status(400).json({ error: 'No file provided' });
  }

  let logMessages = [];
  fs.readFile('logs.txt', 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end('Error reading file');
    } else {
      const logs = data.split('\n').map(line => {
        const [date, level, logData] = line.split(' - ');
        const log = JSON.parse(logData);
        return { date, level, ...log };
      });
      const filteredLogs = logs.filter(log => log.level === 'error' || log.level === 'warn');
      response.writeHead(200, {'Content-Type': 'application/json',
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'});
      response.end(JSON.stringify(filteredLogs));
    }
  return res.json(logMessages);
  console.log(logMessages)
  
  });


  
  
});

app.listen(port, () => {
  console.log(`Log parser app listening at http://localhost:${port}`);
});
