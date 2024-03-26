import Product from "../model/product-model.js";

const Uploadedproduct = async (req, res) => {
    try {
        const allProducts = await Product.find();
        res.status(200).json({
            success: true,
            message: "All products fetched successfully",
            users: allProducts,
        });
    }
    catch {
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Internal server error",
        })
    }
}

export default Uploadedproduct;