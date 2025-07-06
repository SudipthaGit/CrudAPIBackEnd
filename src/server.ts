import * as mongoose from "mongoose";
import * as express from 'express';
import * as bodyparser from "body-parser";
import * as cors from "cors";
import { getEnvVariable } from "./enviroment/environment";
import userRoute from "./Routes/userRoute";

export class server{
    public app:express.Application=express();
    constructor(){
        this.setConfig();
        this.setRoutes();
        this.error404Handler();
        this.HandleErrors();
    }
    setConfig(){
        this.app.use(cors()); // Enable CORS for all routes
        this.ConnectToMongoDB();
        this.configuireBodyParser();
    }
    setRoutes(){
        this.app.use('/api/user',userRoute);
    }
    ConnectToMongoDB(){
        mongoose.connect(getEnvVariable().db_URI)
        .then(()=>{
            console.log('connected to Mongodb');
        });
    }
    configuireBodyParser(){
        this.app.use(bodyparser.urlencoded({
            extended:true
        }));
    }
    error404Handler(){
        this.app.use((req,res)=>{
            res.status(404).json({
                message:"Error 404",
                status_code:404
            });
        })
    }
    HandleErrors(){
        this.app.use((error,req,res,next)=>{
            const error_Status=req.errorStatus || 500;
            res.status(error_Status).json({
                message:error.message || "something went wrong",
                status_code:error_Status
            });
        })
    }
}