import { server } from "./server";

let serv=new server();

serv.app.listen(3000,()=>{
    console.log('server has started at 3000');
})

