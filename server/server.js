import dotenv from "dotenv";
dotenv.config();
import Express from "express";
import cors from "cors";
import connectDb from "./database/dbcon.js";
import router from "./router/auth-router.js";

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


app.use('/api', router);
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Port is Running on ${port}`);
    });
});