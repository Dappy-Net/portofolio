const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { title: 'My Express App' });
});

app.get('*', (req, res) => {
  res.render('404', { title: '404' });
});

app.use('/assets', express.static('./assets'))

app.listen(3000, () => {
    console.log('Server started on port 3000');
});


