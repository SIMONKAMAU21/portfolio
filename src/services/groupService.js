import { poolRequest, sql } from "../utils/connectDb.js";

// adding a group
export const addgroupService = async (newgroup) => {
  try {
    const result = await poolRequest()
      .input("GroupID", sql.Int, newgroup.GroupID)
      .input("GroupName", sql.VarChar, newgroup.GroupName)
      .input("Description", sql.VarChar, newgroup.Description)
      .input("CreatedDate", sql.DateTime, new Date(newgroup.CreatedDate)) // Convert to DateTime
      .query(
        "INSERT INTO GroupTable (GroupID, GroupName, Description, CreatedDate) VALUES (@groupID, @Groupname,@Description,@CreatedDate)"
      );
    return result;
  } catch (error) {
    return error;
  }
};


//////////////////geting all  groups

export const getgroupService = async () => {
  try {
    const result = await poolRequest().query("select* from GroupTable");
    console.log(result.recordset);
    
    return result.recordset;
   } catch (error) {
      return error.message;
   }
};




export const updategroupService = async (group) => {
  const { groupID, groupname, Email, Password, TagName, Location }= group;
  try {
    const result = await poolRequest()
      .input("groupID", sql.Int,updategroup.groupID)
      .input("groupname", sql.VarChar,updategroup.groupname)
      .input("Email", sql.VarChar,updategroup.Email)
      .input("Password", sql.VarChar,updategroup.Password)
      .input("TagName", sql.VarChar,updategroup.TagName)
      .input("Location", sql.VarChar,updategroup.Location)
      .query(
        "UPDATE  tbl_group SET groupname=@groupname, Email=@Email, Password=@Password,Location=@Location TagName=@TagName WHERE groupID=@groupID"
      );
    return result;
  } catch (error) {
    return error;
  }
};