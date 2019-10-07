import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import csurf from 'csurf';
import compression from 'compression';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';
// import * as Sentry from '@sentry/node';
import { mongooseConnection } from './config';
import routes from './routes/';
dotenv.config();

const app = express();
const csrfProtection = csurf({cookie: true});
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');
// Sentry.init({ dsn: 'https://eaf01970066f4ef6920c49a7407010f6@sentry.io/1478123' });

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
    mongooseConnection(process.env.MONGODB_DEV);
} else {
    mongooseConnection(process.env.MONGODB_URI);
}

app.use(compression());
app.use(helmet());
app.use(cors());
// app.use(csrfProtection());
app.set('trust proxy', 1);
// app.use(session({
//     secret: 's3cur3',
//     name: 'sessionId'
// }))
app.disable('x-powered-by');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'app/build')));
// Serve static files from the Express app
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../app/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../app/build', 'index.html'));
  });
}
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    console.log(err)
    res.status(err.status || 500);
    res.json({error:err})
    // res.render('error');
});

module.exports = app;
