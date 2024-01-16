import User from "../model/user-model.js";

const RegisteredUser = async (req, res) => {
    try {
        const allUsers = await User.find();
        res.status(200).json({
            success: true,
            message: "All user details fetched successfully",
            users: allUsers,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export default RegisteredUser;
