const { UsersModel } = require("../../models/UsersModel.js");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.Signup = async (req, res, next) => {
    try {
        const { name, email, password, phone, createdAt } = req.body;
        const existingUser = await UsersModel.findOne({ email });

        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await UsersModel.create({ name, email, password: hashedPassword, phone, createdAt });
        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true,
        });

        res.status(201).json({ message: "User signed in successfully", success: true, user });

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports.Login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({ message: "Please enter all the fields" });
        }

        const user = await UsersModel.findOne({ email });

        if (!user) {
            return res.json({ message: "User not found" });
        }

        const auth = await bcrypt.compare(password, user.password);

        if (!auth) {
            return res.json({ message: "Invalid password or email" });
        }

        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: true,
        });

        res.status(201).json({ message: "User signed in successfully", success: true, user });

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};