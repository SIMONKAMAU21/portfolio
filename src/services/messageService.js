import { poolRequest, sql } from "../utils/connectDb.js";

// adding a message
export const addmessageService = async (newmessage) => {
  try {
    const result = await poolRequest()
      .input("MessageID", sql.Int, newmessage.MessageID)
      .input("SenderID", sql.Int, newmessage.SenderID)
      .input("ReceiverID", sql.Int, newmessage.ReceiverID)
      .input("Content", sql.VarChar, newmessage.Content)
      .input("MessageDate", sql.DateTime, new Date(newmessage.MessageDate)) // Convert to DateTime
      .query(
        "INSERT INTO Message (MessageID, SenderID, ReceiverID, MessageDate,Content) VALUES (@MessageID, @SenderID,@ReceiverID,@MessageDate,@Content)"
      );
    return result;
  } catch (error) {
    return error;
  }
};


// getting all messages by tbl

export const getmessageService = async () => {
  try {
    const result = await poolRequest().query("select* from Message");
    console.log(result.recordset);
    
    return result.recordset;
   } catch (error) {
      return error.message;
   }
};


export const updateeventService = async (event) => {
  const { MessageID, SenderID, ReceiverID, Content,MessageDate }= event;
  try {
    const result = await poolRequest()
    .input("MessageID", sql.Int, MessageID)
    .input("SenderID", sql.Int, SenderID)
    .input("ReceiverID", sql.Int, ReceiverID)
    .input("Content", sql.VarChar,Content)
    .input("MessageDate", sql.DateTime, new Date(MessageDate)) // Convert to DateTime
    .query(
      "UPDATE  Message SET  SenderID=@SenderID, ReceiverID=@ReceiverID, MessageDate=@MessageDate,Content=@Content WHERE MessageID=@MessageID"
    );
    return result;
  } catch (error) {
    return error;
  }
};