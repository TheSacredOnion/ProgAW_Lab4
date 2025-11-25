'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
//TODO1  
  const r = parseFloat(req.params.r);
  const area = Math.PI * r * r;
  const circumference = 2 * Math.PI * r;
  res.json({ area, circumference });
});

//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});