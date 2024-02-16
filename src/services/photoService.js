import { poolRequest, sql } from "../utils/connectDb.js";

// adding a photo
export const addphotoService = async (newphoto) => {
  try {
    const result = await poolRequest()
      .input("PhotoID", sql.Int, newphoto.PhotoID)
      .input("UserID", sql.VarChar, newphoto.UserID)
      .input("PhotoURL", sql.VarChar, newphoto.PhotoURL)
      .input("UploadDate", sql.DateTime, new Date(newphoto.UploadDate)) // Convert to DateTime
      .query(
        "INSERT INTO photo (PhotoID, UserID, PhotoURL,UploadDate) VALUES (@PhotoID, @UserID,@PhotoURL,@UploadDate)"
      );
    return result;
  } catch (error) {
    return error;
  }
};


//////////////////geting all  photos

export const getphotoService = async () => {
   try {
     const result = await poolRequest().query("select* from Photo");
     console.log(result.recordset);
     
     return result.recordset;
    } catch (error) {
       return error.message;
    }
 };



 // UPDATING PHOTO

export const updatephotoService = async (photo) => {
  const { PhotoID, UserID, PhotoURL, UploadDate }= photo;
  try {
    const result = await poolRequest()
      .input("PhotoID", sql.Int, PhotoID)
      .input("UserID", sql.VarChar,UserID)
      .input("PhotoURL", sql.VarChar,PhotoURL)
      .input("UploadDate", sql.DateTime, new Date(UploadDate))
      .query(
        "UPDATE  photo SET UserID=@UserID, PhotoURL=@PhotoURL,UploadDate=@UploadDate WHERE PhotoID=@PhotoID"
      );
    return result;
  } catch (error) {
    return error;
  }
};
