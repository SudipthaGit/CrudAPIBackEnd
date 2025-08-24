import { Router } from "express";
import { UserController } from "../Controller/UserController";
import { GlobalMiddleware } from "../MiddleWare/GlobalMiddleWare";

export class userRoute {
    public router: Router;
    constructor() {
        this.router = Router();
        this.getRoutes();
        this.PostRoutes();
        this.patchRoutes();
    }
    getRoutes() {
        this.router.get('/fetchuser',GlobalMiddleware.authenticate, UserController.fetchUserDetails);
    }
    PostRoutes() {
        this.router.post('/adduser',GlobalMiddleware.authenticate, UserController.insertUserdetails);
        this.router.post('/updateuser',GlobalMiddleware.authenticate, UserController.updateUserDetails);
        this.router.post('/deactiveuser',GlobalMiddleware.authenticate, UserController.InactiveUser);
        this.router.post('/login',UserController.login);
    }
    patchRoutes() {
       
    }
}
export default new userRoute().router;