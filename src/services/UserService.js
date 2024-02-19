import { poolRequest, sql } from "../utils/connectDb.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv"

// adding a user
export const addUserService = async (newUser) => {
  try {
    const result = await poolRequest()
      .input("UserID", sql.Int, newUser.UserID)
      .input("Username", sql.VarChar, newUser.Username)
      .input("Email", sql.VarChar, newUser.Email)
      .input("Password", sql.VarChar, newUser.Password)
      .input("TagName", sql.VarChar, newUser.TagName)
      .input("Location", sql.VarChar,newUser.Location)
      .query(
        "INSERT INTO tbl_User (UserID, Username, Email, Password, TagName,Location) VALUES (@UserID, @Username,@Email,@Password,@TagName,@Location)"
      );
    return result;
  } catch (error) {
    return error;
  }
};

// find by credentials


export const findByCredentialsService= async(user)=>{
  try {
    // if there is a user with this username

    const result=await poolRequest()
    .input("Username",sql.VarChar, user.Username)
    .query ("SELECT * FROM tbl_User WHERE Username=@Username");
    if(result.recordset[0]){

      // taking password from db and comparing it using bcrypt

      if(await bcrypt.compare(user.Password,result.recordset[0].Password)){

        // send user detailes without password and jwt token
        let token =jwt.sign(
          {
          id:result.recordset[0].id,
          Username : result.recordset[0].Username,
          Email :result.recordset[0].Email,
          },
          process.env.jwt_secret,{expireIn:"2h"}
        );
        const{Password, ...user}=result.recordset[0];
        return{user,token:` JWT ${token}`};
      }else{
        return{error:"invalid credentials"} 
      }
    }
  } catch (error) {
    return error;
  }
}

// getting all users from table
export const getUserService = async () => {
  try {
    const result = await poolRequest().query("select* from tbl_User");
    console.log(result.recordset);
    
    return result.recordset;
   } catch (error) {
      return error.message;
   }
};



// UPDATING USER 
export const updateUserService = async (user) => {
  const { UserID, Username, Email, Password, TagName, Location }= user;
  try {
    const result = await poolRequest()
      .input("UserID", sql.Int, UserID)
      .input("Username", sql.VarChar,Username)
      .input("Email", sql.VarChar,Email)
      .input("Password", sql.VarChar,Password)
      .input("TagName", sql.VarChar,TagName)
      .input("Location", sql.VarChar,Location)
      .query(
        "UPDATE  tbl_User SET Username=@Username,Email=@Email,Password=@Password,Location=@Location,TagName=@TagName WHERE UserID=@UserID"
      );
    return result;
  } catch (error) {
    return error;
  }
};











