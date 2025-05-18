import usersModel from "../models/userModel.js";

export const createUser = async (req, res) => {
    console.log("controller api run");
    try {
        const { name, email, age, password } = req.body;
        const user = await usersModel.create({ name, email, password, age });
        if (user) {
            res.json({ success: true, message: "user created successfully." });
        }
    } catch (error) {
        res.json({ success: false, error: error });
    }
}

export const userList = async (req, res) => {
    console.log("api run");
    try {
        const users = await usersModel.find({});
                        
        if (users) {
            res.status(200).json({success:true, users});
        }
    } catch (error) {
        res.status(500).json({ success: false, message:"Fetching error ", error });
    }
};




