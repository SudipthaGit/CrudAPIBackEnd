import user from "../models/user";

export class UserController {
    static async fetchUserDetails(req, res, next) {
        try {
            const data = await user.find();
            res.status(200).json({
                message: "User details fetched successfully",
                data: data,
                isSuccess: true
            });
        }
        catch (err) {
            next(err);
        }

    }

    static async insertUserdetails(req, res, next) {
        try {
            const userDetails = new user({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
                role: req.body.role,
                isActive: true,
                createdAt: new Date()
            });
            const data = await userDetails.save();
            res.status(200).json({
                message: "User details inserted successfully",
                isSuccess: true
            });
        }
        catch (err) {
            next(err);
        }

    }
    //update user
    static async updateUserDetails(req, res, next) {
        try {
            const email = req.body.email; // Assuming email is used as a unique identifier
            console.log(email)
            const data = await user.findOneAndUpdate(
                { email: email },
                { name: req.body.name },
                { new: true }
            );
            if (!data) {
                return res.status(404).json({
                    message: "User not found",
                    isSuccess: false
                });
            }
            res.status(200).json({
                message: "User Updated successfully",
                isSuccess: true
            });
        }
        catch (err) {
            next(err);
        }
    }

    //delete user
    static async InactiveUser(req, res, next) {
        try {
            const email = req.body.email; // Assuming email is used as a unique identifier
            const data = await user.findOneAndUpdate(
                { email: email },
                { isActive: false,modified_at:new Date() },
                { new: true });
            if (!data) {
                return res.status(404).json({
                    message: "User not found",
                    isSuccess: false
                });
            }
            res.status(200).json({
                message: "User Deactivated successfully",
                isSuccess: true
            });
        }
        catch (err) {
            next(err);
        }
    }
    static async updateUserRoleDetails(req, res, next) {
        try {
            const email = req.body.email; // Assuming email is used as a unique identifier
            console.log(email)
            const data = await user.findOneAndUpdate(
                { email: email },
                { role: req.body.role },
                { new: true }
            );
            if (!data) {
                return res.status(404).json({
                    message: "User not found",
                    isSuccess: false
                });
            }
            res.status(200).json({
                message: "User Role Updated successfully",
                isSuccess: true
            });
        }
        catch (err) {
            next(err);
        }
    }
}