const { Router } = require("express");
const routesUser = Router();
const UserController = require("../controllers/UserController");
const jwt = require("jsonwebtoken");
// const routes = require("./");

routesUser.get('/users',validateJWT, UserController.getUsers);
routesUser.post('/users/add', UserController.addUser);
routesUser.post('/login', UserController.login);

// routesVerse.post('/verse/:id', VerseController.getverse);

function validateJWT(req, res, next) {
    try {
        const token = req.headers.authorization.split('Bearer ')[1];
        // console.log(token)
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();

    } catch (err){
        console.log(err);
        res.status(401).json({message:"unauthorized"});
    }
}

module.exports = routesUser;