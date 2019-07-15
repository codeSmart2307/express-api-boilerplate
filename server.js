const app = require('./app');

const configs = require('./controllers/helpers/config');
const logger = require('./controllers/helpers/logger');

const PORT = configs.port;
logger.LogDataEnable(configs.isLogEnabled);

/**
 * @description Start Express Server
 */
const server = app.listen(PORT, () => {
    logger.info('Express API is listening on port ' + PORT);
    console.log('Configs loaded: ', configs);
});

module.exports = server;