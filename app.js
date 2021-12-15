const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const flash = require('connect-flash');

require('dotenv').config();

const exphbs = require('express-handlebars');
const helpers = require('./views/helpers/index');
const session = require('express-session');
const passport = require('./components/middlewares/passport');
const sessionHandler = require('./components/middlewares/sessionHandler')
const _logger = require('./components/middlewares/logger')
const app = express();

// Router
const storeIndexRouter = require('./components/index/index');
const storeProductsRouter = require('./components/products/productRouter');
const accountRouter = require('./components/account/accountRouter');
const apiCommentRouter = require('./components/api/comment/apiCommentRouter');
const apiProductRouter = require('./components/api/product/apiProductRouter');
// Database
const db = require('./models');
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

db.sequelize.sync();

// Views
app.engine(
	'hbs',
	exphbs({
		defaultLayout: 'store',
		extname: 'hbs',
		layoutsDir: 'views/layouts',
		partialsDir: 'views/partials',
		helpers,
	})
);

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
// Authentication

app.use(session({ cookie:{maxAge:100*60*60*24*365},secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

app.use(function (req, res, next) {
	res.locals.user = req.user;
	next();
});

app.use(sessionHandler);
app.use(_logger);
// Routes
app.use('/', storeIndexRouter);
app.use('/products', storeProductsRouter);
app.use('/account', accountRouter);
app.use('/api/comment', apiCommentRouter);
app.use('/api/product', apiProductRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
