const rootRoutes = require('./root/root_routes');
const privateRoutes = require('./private/private_routes');
const publicRoutes = require('./public/public_routes');

module.exports = function(app) {
    rootRoutes(app);
    privateRoutes(app);
    publicRoutes(app);
};