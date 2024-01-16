import express from "express";
import register from "../controllers/auth-controllers.js";
import login from "../controllers/login-controller.js";
import ContactData from "../controllers/contact-controller.js";
import { createProduct, upload } from "../controllers/product-controller.js";

import RegisteredUser from "../controllers/user-controller.js";
import ListedContacts from "../controllers/listedcontact-controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("We are going to create a complete dashboard MERN project");
});

router.post("/registration", register);
router.post("/login", login);
router.post("/contact", ContactData);
router.post("/products", upload.array("productImages", 5), createProduct);

router.get("/users", RegisteredUser);
router.get("/contacts", ListedContacts);

export default router;
