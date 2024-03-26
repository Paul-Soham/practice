import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        discountPercentage: {
            type: Number,
            default: 0,
        },
        rating: {
            type: Number,
            default: 0,
        },
        stock: {
            type: Number,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
<<<<<<< HEAD
        thumbnailImage: {
            type: String,
            required: true,
        },
        productImages: {
            type: [String], // Assuming an array of image URLs
            default: [],
        },
        // Assuming you want to associate products with a user, add the following:
        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User',
        //     required: true,
        // },
=======
        // thumbnailImage: {
        //     type: String,
        //     required: true,
        // },
        productImages: {
            type: [String], 
            default: [],
        },

>>>>>>> 62c3ac1835686638464660a8905b7f5ccb52bc45
    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
