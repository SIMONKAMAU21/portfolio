import { poolRequest, sql } from "../utils/connectDb.js";

// adding a eventAttendee
export const addeventAttendeeService = async (neweventAttendee) => {
  try {
    const result = await poolRequest()
      .input("EventID", sql.Int, neweventAttendee.EventID)
      .input("AttendeeID", sql.VarChar, neweventAttendee.AttendeeID)
      .query(
        "INSERT INTO EventAttendee(EventID, AttendeeID) VALUES (@EventID, @AttendeeID)"
      );
    return result;
  } catch (error) {
    return error;
  }
};


//////////////////geting all  eventAttendees

export const geteventAttendeeService = async () => {
   try {
     const result = await poolRequest().query("select* from EventAttendee");
     console.log(result.recordset);
     
     return result.recordset;
    } catch (error) {
       return error.message;
    }
 };



  // UPDATING eventatendee
 export const updateeventAttendeeService = async (event) => {
  const { EventID, AttendeeID}= event;
  try {
    const result = await poolRequest()
    .input("EventID", sql.Int,EventID)
    .input("AttendeeID", sql.VarChar,AttendeeID)
  // Convert to DateTime
    .query(
     "UPDATE   EventAttendee SET AttendeeID=@AttendeeID  WHERE EventID=@EventID"
    );
    return result;
  } catch (error) {
    return error;
  }
};