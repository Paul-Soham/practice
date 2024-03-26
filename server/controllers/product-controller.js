import Product from "../model/product-model.js";
import multer from "multer";

// Set up multer for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./database/uploads/"); // Specify the directory where you want to store the images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Use a timestamp to avoid overwriting files
    },
});

const upload = multer({ storage: storage });

// Controller to handle product creation with image upload
const createProduct = async (req, res) => {
    try {
        const { id, title, description, price, discountPercentage, rating, stock, brand, category } = req.body;
        // const thumbnailImage = req.file.path; // Assuming thumbnailImage is uploaded as a single file
        const productImages = req.files.map((file) => file.path); // Assuming productImages is uploaded as an array of files

        // Create the product
        const product = await Product.create({ id, title, description, price, discountPercentage, rating, stock, brand, category, productImages });

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product,
        });
    } catch (error) {
        console.error("Error in createProduct controller:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
};

export { createProduct, upload };
