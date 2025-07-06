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
}