import { sign, verify} from "jsonwebtoken";
class AuthMiddleware {
private userId : string
    public verify(req, res, next){
        try {
            const token = req.headers.authorization.split(' ')[1]
            const decodedToken = verify(token, 'AZERTY')
            req.auth = {
                userId: decodedToken
            };
            next()
         } catch (error){
            res.status(401).json({error});
        }
    }
}
export default new AuthMiddleware()