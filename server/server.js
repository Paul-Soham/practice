import dotenv from "dotenv";
dotenv.config();
import Express from "express";
import cors from "cors";
import connectDb from "./database/dbcon.js";
import router from "./router/auth-router.js";
<<<<<<< HEAD
=======
import multer from "multer";
>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45

const port = 5000;
const app = Express();

var corsOptions = {
    origin: '*',
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS",
    credentials: true
}
app.use(cors(corsOptions));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

<<<<<<< HEAD
=======
// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/"); // Specify the directory where you want to store the images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Use a timestamp to avoid overwriting files
    },
});

const upload = multer({ storage: storage });

// Route to handle file uploads
app.post("/upload", upload.single("file"), (req, res) => {
    // If you're using single file upload, use `upload.single()`
    // If you're using multiple file uploads, use `upload.array()`
    res.json({ success: true, message: "File uploaded successfully", file: req.file });
});
>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45

app.use('/api', router);
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Port is Running on ${port}`);
    });
});