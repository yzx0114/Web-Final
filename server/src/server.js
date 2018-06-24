require('../config.js');
const express = require('express');
const accessController = require('./middleware/access-controller.js');

const requestLogger = require('./middleware/request-logger.js');
const errorHandler = require('./middleware/error-handler.js');
const newlendRouter = require('./routers/newlendform.js');
const borrowRouter = require('./routers/borrowform.js');
const arrearRouter = require('./routers/arrearform.js');
const historyRouter = require('./routers/historyform.js');
const alertListRouter = require('./routers/alertList.js');
const loginRouter = require('./routers/login.js');
const friendRouter = require('./routers/friend.js');
const app = express();

// app.use(requestLogger); // debug only
app.use(express.static('dist', {
    setHeaders: (res, path, stat) => {
        res.set('Cache-Control', 'public, s-maxage=86400');
    }
}));

app.use('/api', newlendRouter);
app.use('/api', borrowRouter);
app.use('/api', arrearRouter);
app.use('/api', historyRouter);
app.use('/api', alertListRouter);
app.use('/api', loginRouter);
app.use('/api', friendRouter);
app.get('/*', (req, res) => res.redirect('/'));
app.use(accessController);
app.use(errorHandler);

const port = 8080;
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}...`);
});
