import express from "express";
import register from "../controllers/auth-controllers.js";
import login from "../controllers/login-controller.js";
<<<<<<< HEAD
=======
import updateControllers from "../controllers/updateuser-controller.js"
import deleteControllers from "../controllers/deleteuser-controller.js";
>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45
import ContactData from "../controllers/contact-controller.js";
import { createProduct, upload } from "../controllers/product-controller.js";

import RegisteredUser from "../controllers/user-controller.js";
<<<<<<< HEAD
=======
import GetUserById from "../controllers/singleuser-controller.js"
>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45
import ListedContacts from "../controllers/listedcontact-controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).send("We are going to create a complete dashboard MERN project");
});

router.post("/registration", register);
router.post("/login", login);
router.post("/contact", ContactData);
<<<<<<< HEAD
router.post("/products", upload.array("productImages", 5), createProduct);

router.get("/users", RegisteredUser);
=======
router.put("/update", updateControllers);
router.delete("/delete", deleteControllers);
router.post("/products", upload.array("productImages", 5), createProduct);

router.get("/users", RegisteredUser);
router.get("/user/:id", GetUserById);
>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45
router.get("/contacts", ListedContacts);

export default router;
