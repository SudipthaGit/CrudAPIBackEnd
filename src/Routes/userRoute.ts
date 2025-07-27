import { Router } from "express";
import { UserController } from "../Controller/UserController";

export class userRoute {
    public router: Router;
    constructor() {
        this.router = Router();
        this.getRoutes();
        this.PostRoutes();
        this.patchRoutes();
    }
    getRoutes() {
        this.router.get('/fetchuser',UserController.fetchUserDetails);
    }
    PostRoutes() {
        this.router.post('/adduser',UserController.insertUserdetails);
        this.router.post('/updateuser',UserController.updateUserDetails);
        this.router.post('/deactiveuser',UserController.InactiveUser);
        this.router.post('/updaterole',UserController.updateUserRoleDetails);
    }
    patchRoutes() {
       
    }
}
export default new userRoute().router;