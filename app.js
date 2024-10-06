const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use('/', routes);
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3001, () => {
    console.log ('server initialize on http://localhost:3001')
});

