const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const https = require('https');

app.use(express.static(path.join(__dirname, './ajax/dist/ajax')));


app.get('/random/:emailid', (req, res) => {
  if(req.params.emailid == "kokkam") {
      res.json({ msg: "authentication success" });

  } else {
    res.json({msg: "authentication failed"});
  }
});

app.listen(port, () => {
  console.log('Listening on *:3000');
});
