const { Router } = require('express');
const routes = Router();

routes.get('/', (req, res)=> {
    res.send("Landing page aplikasi parkir motor")
})

const routesUser = require('./user');
routes.use(routesUser);

module.exports = routes;