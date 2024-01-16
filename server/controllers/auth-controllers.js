import User from "../model/user-model.js";
import bcrypt from "bcryptjs";

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ Message: "Email already exists" });
        }

        // Password encryption
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        const userCreated = await User.create({ username, email, phone, password: hashPassword });
        const token = await userCreated.generateToken();

        res.status(201).send({
            Message: "Registration Successful",
            token: token,
            UserId: userCreated._id.toString(),
        });

    } catch (error) {
        console.error(error);
        res.status(500).json("Internal server error");
    }
};

export default register;