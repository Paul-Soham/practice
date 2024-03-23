import Contact from "../model/contact-model.js";
const ContactData = async (req, res) => {
    try {
        const { username, subject, email, phone, massage } = req.body;
        const contactCreated = await Contact.create({ username, subject, email, phone, massage });
        res.status(201).send({ Message: "Contact details added successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal server error");
    }
}
export default ContactData;