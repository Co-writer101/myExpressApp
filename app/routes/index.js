const rootRoutes = require('./root_routes');
const privateRoutes = require('./private_routes');
const publicRoutes = require('./public_routes');

module.exports = (app) => {
    rootRoutes(app);
    privateRoutes(app);
    publicRoutes(app);
};