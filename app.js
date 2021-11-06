const express = require('express')
const exphbs  = require('express-handlebars');
var express_handlebars_sections = require('express-handlebars-sections');
const app = express()
const port = 3000


//set static forder public
app.use(express.static(__dirname + '/public'));

app.engine('hbs', exphbs({
  defaultLayout: 'main.hbs',
  extname: '.hbs',
  layoutsDir: 'views/_layouts',
  partialsDir: 'views/_partials',
  helpers: {
    section: express_handlebars_sections(),
  },
}
));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home');
});


require('./middlewares/error.mdw')(app);


app.listen(port, () => {
  console.log(`Web app listening at http://localhost:${port}`)
})