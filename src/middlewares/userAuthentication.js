import jwt from "jsonwebtoken"




export const authMiddleware= (req,res,next)=>{
   if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0]==='jwt'){
      jwt.verify(req.headers.authorization.split(' ')[1],process.env.jwt_secret,(err,decode)=> {
         if(err){
            return (res,'not authorized2')
         }
         else{
            req.user= decode;
            next()
         }
      })
   }else{
      return(res,'not authorized');
   }
}