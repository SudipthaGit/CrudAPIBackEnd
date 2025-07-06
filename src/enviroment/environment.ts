import { EnvDev } from "./environment.dev";
import { EnvProd } from "./environment.prod";

export interface enviromentIF{
    db_URI:string;
    Jwt_Secret_Key:string
}
export function getEnvVariable(){
    console.log(process.env.NODE_ENV);
    if(process.env.NODE_ENV==='production')
        return EnvProd;
    else 
        return EnvDev;
}