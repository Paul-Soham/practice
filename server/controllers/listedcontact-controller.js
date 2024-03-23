import Contact from "../model/contact-model.js";

const ListedContacts = async (req, res) => {
    try {
        const allContacts = await Contact.find();
        res.status(200).json({
            success: true,
            message: "All contact details fetched successfully",
            users: allContacts,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export default ListedContacts;
