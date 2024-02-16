import { poolRequest, sql } from "../utils/connectDb.js";

// adding a event
export const addeventService = async (newevent) => {
  try {
    const result = await poolRequest()
      .input("EventID", sql.Int, newevent.EventID)
      .input("EventName", sql.VarChar, newevent.EventName)
      .input("Location", sql.VarChar, newevent.Location)
      .input("EventPosterURL", sql.VarChar, newevent.EventPosterURL)
      .input("Descri_ption", sql.VarChar, newevent.Descri_ption)
      .input("EventDate", sql.DateTime, new Date(newevent.EventDate)) // Convert to DateTime
      .query(
        "INSERT INTO Event (EventID, EventName, Descri_ption,EventDate,EventPosterURL,Location) VALUES (@EventID, @EventName,@Descri_ption,@EventDate,@EventPosterURL,@Location)"
      );
    return result;
  } catch (error) {
    return error;
  }
};


//////////////////geting all  events

export const geteventService = async () => {
   try {
     const result = await poolRequest().query("select* from event");
     console.log(result.recordset);
     
     return result.recordset;
    } catch (error) {
       return error.message;
    }
 };



  // UPDATING event

export const updateeventService = async (event) => {
  const { EventID, EventName, Location, EventPosterURL,Descri_ption ,EventDate}= event;
  try {
    const result = await poolRequest()
    .input("EventID", sql.Int,EventID)
    .input("EventName", sql.VarChar,EventName)
    .input("Location", sql.VarChar,Location)
    .input("EventPosterURL", sql.VarChar,EventPosterURL)
    .input("Descri_ption", sql.VarChar,Descri_ption)
    .input("EventDate", sql.DateTime, new Date,(EventDate)) // Convert to DateTime
    .query(
      "UPDATE  Event SET EventName=@EventName ,Location=@Location,EventPosterURL=@EventPosterURL,Descri_ption=@Descri_ption,EventDate=@EventDate WHERE EventID=@EventID"
    );
    return result;
  } catch (error) {
    return error;
  }
};
