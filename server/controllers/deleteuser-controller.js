import User from "../model/user-model.js";

const deleteControllers = async (req, res) => {
    try {
        const { userId } = req.query;

        console.log(req.query);

        const deletedUser = await User.findOneAndDelete({ _id: userId });

        if (!deletedUser) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).send({
            success: true,
            message: "User deleted successfully",
            User: deletedUser,
        });
    } catch (err) {
        res.status(500).send({
            message: "Error in delete user by ID controller",
            success: false,
            err,
        });
    }
};

export default deleteControllers;