import User from "../model/user-model.js";
import bcrypt from "bcryptjs";

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Request Data:", JSON.stringify(req.body, null, 2));

        const existingUser = await User.findOne({ email:email });

        console.log("Hello user:",existingUser);
        if (!existingUser) {
            console.log("User not found for email:", email);
            return res.status(400).json({ Message: "Invalid Email" });
        }

        const isPasswordValid = await bcrypt.compareSync(password, existingUser.password);

        console.log("isPasswordValid",isPasswordValid);
        if (isPasswordValid) {
            console.log("Login successful for user:", existingUser.email);

            if (!isPasswordValid) {
                console.log("Invalid password");
                return res.status(400).send({
                    success: false,
                    message: "Invalid password",
                });
                
            }

            const token = await existingUser.generateToken();

            res.status(200).json({
                Message: "Login Successful",
                token: token,
                UserId: existingUser._id.toString(),
            });
        } else {
            console.log("Invalid password for user:", existingUser.email);
            console.log("Invalid password", isPasswordValid);
            res.status(401).json({ Message: "Invalid email or password" });
        }

    } catch (error) {
        console.error("Error in login controller:", error);
        res.status(500).json({ Message: "Internal server error" });
    }
};

export default login;
