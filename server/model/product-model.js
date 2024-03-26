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
        // thumbnailImage: {
        //     type: String,
        //     required: true,
        // },
        productImages: {
            type: [String], 
            default: [],
        },

    },
    { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
