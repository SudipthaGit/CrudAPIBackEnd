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
    }
    patchRoutes() {
       
    }
}
export default new userRoute().router;