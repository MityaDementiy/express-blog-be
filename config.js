const env = process.env.NODE_ENV || 'development';

// eslint-disable-next-line import/no-dynamic-require
const credentials = require(`./.credentials.${env}`);

module.exports = { credentials };
