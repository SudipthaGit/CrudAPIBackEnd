import * as jwt from 'jsonwebtoken';
import { getEnvVariable } from '../enviroment/environment';
export class Auth {

    static JwtSignIn(payload: any) {
        return jwt.sign(
            payload,
            getEnvVariable().Jwt_Secret_Key,
            {
                expiresIn: '1h'
            });
    }

    static JwtVerify(token: string) {
        return new Promise((resolve, reject) => {
             jwt.verify(token, getEnvVariable().Jwt_Secret_Key, (err, decoded) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            });
        });
    }
}