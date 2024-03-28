import express from "express";
import register from "../controllers/auth-controllers.js";
import login from "../controllers/login-controller.js";
import updateControllers from "../controllers/updateuser-controller.js"
import deleteControllers from "../controllers/deleteuser-controller.js";
import ContactData from "../controllers/contact-controller.js";
import { createProduct, upload } from "../controllers/product-controller.js";
import Uploadedproduct from "../controllers/allproducts-controller.js"

import RegisteredUser from "../controllers/user-controller.js";
import GetUserById from "../controllers/singleuser-controller.js"
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
router.put("/update", updateControllers);
router.delete("/delete", deleteControllers);

router.get("/users", RegisteredUser);
router.get("/user/:id", GetUserById);
router.get("/contacts", ListedContacts);
router.get("/allproducts", Uploadedproduct);

export default router;
