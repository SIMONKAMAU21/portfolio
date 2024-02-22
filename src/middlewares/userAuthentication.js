import jwt, { decode } from "jsonwebtoken";
import { notAuthorized } from "../helper/HelperFunctions.js";

// export const authMiddleware= (req,res,next)=>{
//    // console.log(req.headers.authorization[1])
//    console.log(process.env.JWT_SECRET)
//    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='JWT'){
//       jwt.verify(req.headers.authorization.split(' ')[1],process.env.JWT_SECRET,(error,decode)=> {
//          if(error){
//             return (res,'not authorized2')
//          }
//          else{
//             req.user= decode;
//             // console.log(decode)
//             next()
//          }
//       })
//    }else{
// console.log(res,"this is the error")
//       return notAuthorized(res,'not authorized');

//    }
// }
export const authMiddleware = (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.JWT_SECRET,
      (err, decode) => {
        if (err) {
          return res, "not authorized";
        } else {
          req.user = decode;
          next();
        }
      }
    );
  } else {
    return notAuthorized(res, "not authorized");
  }
};
