import { poolRequest, sql } from "../utils/connectDb.js";

// adding a friend
export const addfriendService = async (newfriend) => {
  try {
    const result = await poolRequest()
      .input("friendshipID", sql.Int, newfriend.FriendshipID)
      .input("User1ID", sql.Int, newfriend.User1ID)
      .input("User2ID", sql.Int, newfriend.User2ID)
      .input("friendshipDate", sql.DateTime, new Date(newfriend.FriendshipDate)) // Convert to DateTime
      .query(
        "INSERT INTO Friendship (FriendshipID, User1ID, User2ID, friendshipDate) VALUES (@friendshipID, @User1ID,@User2ID,@friendshipDate)"
      );
    return result;
  } catch (error) {
    return error;
  }
};


// getting all friends by tbl

export const getfriendService = async () => {
  try {
    const result = await poolRequest().query("select* from Friendship");
    console.log(result.recordset);
    
    return result.recordset;
   } catch (error) {
      return error.message;
   }
};