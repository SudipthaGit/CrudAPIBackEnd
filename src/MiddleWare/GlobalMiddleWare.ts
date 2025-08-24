// import { validationResult } from "express-validator";
import { Auth } from "../Utils/Auth";


export class GlobalMiddleware {
    static async authenticate(req, res, next) {
        const token = req.headers.authorization?.split(' ')[1];
        console.log("token", token);
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized',isSuccess: false });
        }
        try {
            const decoded = await Auth.JwtVerify(token);
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid token' ,isSuccess: false });
        }
    }
}