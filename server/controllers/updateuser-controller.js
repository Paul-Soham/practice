import User from "../model/user-model.js";

const updateControllers = async (req, res) => {
    try {
        const { UserId } = req.query;
        const updatedData = req.body;

        const updatedUser = await User.findOneAndUpdate(
            { _id: UserId },
            { $set: updatedData },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).send({
            success: true,
            message: "User updated successfully",
            User: updatedUser,
        });
    } catch (err) {
        res.status(500).send({
            message: "Error in update User by ID controller",
            success: false,
            err,
        });
    }
};

export default updateControllers;