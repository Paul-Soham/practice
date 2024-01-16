import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        }
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    //sconsole.log("", this);
    const user = this;
    if (!user.isModified('password')) {
        return next();
    }
    try {
        const salt = 10;
        const hashPassword = await bcrypt.hash(user.password, salt, (error, hash) => {
            if (error) {
                return next(error);
            }
            else {
                console.log(error);
                user.password = hash;
                return next();
            }
        });


    } catch (error) {
        return next(error);
    }
});

userSchema.methods.generateToken = async function () {
    try {
        return jsonwebtoken.sign({
            username: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin,
        },
            process.env.JWT_SECRET_TOKEN,
            {
                expiresIn: "30d",
            }
        );
    }
    catch (error) {
        console.log(error);
    }
};

const User = mongoose.model("users", userSchema);

export default User;