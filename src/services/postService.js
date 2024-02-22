import { poolRequest, sql } from "../utils/connectDb.js";

// adding a post
export const addpostService = async (newpost) => {
  try {
    const result = await poolRequest()
      .input("PostID", sql.Int, newpost.PostID)
      .input("UserID", sql.VarChar, newpost.UserID)
      .input("Likes", sql.VarChar, newpost.Likes)
      .input("Content", sql.VarChar, newpost.Content)
      .input("Comments", sql.VarChar, newpost.Comments)
      .input("PostDate", sql.DateTime, new Date(newpost.PostDate)) // Convert to DateTime
      .query(
        "INSERT INTO Post (PostID, UserID, Likes, Content,Comments,PostDate) VALUES (@PostID, @UserID,@Likes,@Content,@Comments,@PostDate)"
      );
    return result;
  } catch (error) {
    return error;
  }
};

//////////////////geting all  posts

export const getpostService = async () => {
  try {
    const result = await poolRequest().query("select* from Post");
    console.log(result.recordset);

    return result.recordset;
  } catch (error) {
    return error.message;
  }
};

export const updatepostService = async (post) => {
  const { postID, UserID, Likes, Content, Comments, PostDate } = post;
  try {
    const result = await poolRequest()
      .input("PostID", sql.Int, postID)
      .input("UserID", sql.VarChar, UserID)
      .input("Likes", sql.VarChar, Likes)
      .input("Content", sql.VarChar, Content)
      .input("Comments", sql.VarChar, Comments)
      .input("PostDate", sql.VarChar, PostDate)
      .query(
        "UPDATE  Post SET PostID=@PostID,UserID=@UserID, Likes=@Likes,Content=@Content Comments=@Comments WHERE PostID=@PostID"
      );
    return result;
  } catch (error) {
    return error;
  }
};

// DELETING A POST

export const deletePostService = async (postID) => {
  try {
    await poolRequest()
      .input("postID", sql.Int, postID)
      .query("DELETE FROM Post WHERE postID=@postID ");
  } catch (error) {
    return error.message;
  }
};
