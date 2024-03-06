import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCokie from "../utils/generateTokens.js";

export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (password != confirmPassword) {
            return res.status(400).json({ error: "Password did'nt match" });
        }
        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "Username already exist" });
        }

        //HASH PAssword
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender == "male" ? boyProfilePic : girlProfilePic
        })
        // console.log(newUser);
        if (newUser) {
            // jwt
            generateTokenAndSetCokie(newUser._id, res);
            await newUser.save();
            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic
            })
        }
        else {
            res.status(400).json({ error: "invalid input" });
        }

    }
    catch (error) {
        console.log("Error in signup controller ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Username or password is wrong" });
        }

        res.status(200).json(
            {
                username: user.username,
                fullName: user.fullName,
                profilePic: user.profilePic
            }
        )
    }
    catch (error) {
        console.log("Error in Login Controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const logout = (req, res) => {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ msg: "logged out" })
};