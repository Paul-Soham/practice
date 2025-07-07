import Product from "../model/product-model.js";

const BASE_URL = 'http://localhost:5000/'; // Replace 'http://your_server_base_url' with the actual base URL of your server

const Uploadedproduct = async (req, res) => {
    try {
        const allProducts = await Product.find();

        // Map through each product to construct complete image URLs
        const productsWithImageUrl = allProducts.map(product => {
            const productWithImageUrl = { ...product._doc };
            // Append base URL to each image path
            productWithImageUrl.productImages = product.productImages.map(imagePath => BASE_URL + imagePath);
            return productWithImageUrl;
        });

        res.status(200).json({
            success: true,
            message: "All products fetched successfully",
            products: productsWithImageUrl,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        });
    }
}

export default Uploadedproduct;
