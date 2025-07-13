const express = require('express');
const fetch = require('node-fetch');
const path = require('path');


const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
  try {
    const response = await fetch('http://backend-host:8000/api');
    const data = await response.json();
    console.log(data); // Just for debug

    res.render('index', { data: data });  // ✅ Make sure you are passing { data: data }

  } catch (error) {
    console.error('Error fetching data:', error);
    res.render('index', { data: ['Error fetching data'] });
  }
});

app.listen(3000, () => {
  console.log('Ares listening on port 3000');
});
