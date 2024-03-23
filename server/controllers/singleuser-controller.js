import User from '../model/user-model.js';

const GetUserById = async (req, res) => {
    const userId = req.params.id; // Assuming the user ID is passed as a parameter in the URL
    // console.log(userId);
    try {
        const user = await User.findById(userId);
        // console.log(user);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found',
            });
        }
        res.status(200).json({
            success: true,
            message: 'User details fetched successfully',
            user: user,
        });
    } catch (error) {
        // console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal server error',
        });
    }
};

export default GetUserById;
