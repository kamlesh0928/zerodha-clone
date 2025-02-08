require("dotenv").config();

const { UsersModel } = require("../../models/UsersModel");
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {

    const token = req.cookies.token;

    if (!token) {
        return res.json({ status: false });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
        if (err) {
            return res.json({ status: false });
        }

        const user = await UsersModel.findOne({ _id: data.id });

        if (!user) {
            return res.json({ status: false });
        }

        return res.json({ status: true, user: user.name });
    });
}