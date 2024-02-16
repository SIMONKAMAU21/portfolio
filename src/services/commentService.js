import { poolRequest, sql } from "../utils/connectDb.js";

// adding a comment
export const addcommentService = async (newcomment) => {
  try {
    const result = await poolRequest()
      .input("CommentID", sql.Int, newcomment.CommentID)
      .input("UserID", sql.VarChar, newcomment.UserID)
      .input("PostID", sql.VarChar, newcomment.PostID)
      .input("Content", sql.VarChar, newcomment.Content)
      .input("CommentDate", sql.DateTime, new Date(newcomment.CommentDate)) // Convert to DateTime
      .query(
        "INSERT INTO comment (CommentID, UserID, PostID, Content,CommentDate) VALUES (@CommentID, @UserID,@PostID,@Content,@CommentDate)"
      );
    return result;
  } catch (error) {
    return error;
  }
};

//////////////////geting all  comments

export const getcommentService = async () => {
  try {
    const result = await poolRequest().query("select* from Comment");
    console.log(result.recordset);
    
    return result.recordset;
   } catch (error) {
      return error.message;
   }
};