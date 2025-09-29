import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signup = async (req, res) => {
    const {fullName, email, password} = req.body
    try {

        if(!fullName || !email || !password){
            return res.status(400).json({message: "all fields are required"});
        }
        if(password.length < 6){
            return res.status(400).json({message: "password must be at least 6 characters"});
        }

        const user = await User.findOne({email})
        if (user) return res.status(400).json({message: "Email already exists"});

        //hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        // 123445 => asjlk23lkj11@jd*l(ldo92)323r

        const newUser = new User({
            fullName,
            email,
            password: hashedPassword
        })

        if(newUser){
            //generate jwt token
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        } else {
            res.status(400).json({message: "invalid user data"});
        }


    } catch (error) {
        console.log("error in signup controller", error.message);
        res.status(500).json({message: "Internal server error"});
    }
}

export const login = (req, res) => {
    res.send("login up route");
}

export const logout = (req, res) => {
    res.send("logout up route");
}