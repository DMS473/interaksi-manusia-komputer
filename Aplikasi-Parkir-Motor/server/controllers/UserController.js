const {User} = require('../models')
require('dotenv').config()
const jwt = require("jsonwebtoken");

class UserController {

    static async getUsers(req, res){
        try {
            let users = await User.findAll()

            res.status(200).json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    static async addUser(req, res) {
        try {
            const{ name, username, role, password, nomor_plat, image} = req.body;
            let result = await User.create({
                name,
                username,
                password,
                role,
                nomor_plat,
                image
            })
            res.status(201).json(result)
        } catch (err) {
            res.status(500).json(err);
        }
    }

    

    static async login (req, res) {
        try {
            const {username, password} = req.body;
            const userExist = await User.findOne({
                where: {username: username},
            })
            if(userExist) {
                if(userExist.password == password){
                    const jwtToken = jwt.sign(
                        {id: userExist.id, username: userExist.username},
                        process.env.JWT_SECRET
                    )
                    return res.json({ token: jwtToken})
                }
            }

            res.status(401);
            return res.json({ message: "login failed"});
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = UserController




// static async getVerse(req, res){
//     try {
//         let id = req.params.id;
//         let verse = await User.findOne({
//             where : {id: id}
//         })

//         res.status(200).json(verse);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }