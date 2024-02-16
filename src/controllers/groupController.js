import bcrypt from "bcrypt";
import { addgroupService ,getgroupService} from "../services/groupService.js";
import { groupValidator } from "../validator/groupValidator.js";
import {
  sendServerError,
  sendNotFound,
  sendCreated,
} from "../helper/HelperFunctions.js";
import { poolRequest } from "../utils/connectDb.js";

/////////////////
// CREATING A NEW GROUP

export const creategroup = async (req, res) => {
  const { GroupID, GroupName, Description, CreatedDate } = req.body;
  const { error } = groupValidator({
    GroupID,
    GroupName,
    Description,
    CreatedDate,
  });
  console.table(req.body);
  if (error) {
    console.log("this is the error", error);
    return res.status(400).send(error.details[0].message);
  } else {
    try {
      const newgroup = { GroupID, GroupName, Description, CreatedDate };
      const response = await addgroupService(newgroup);
      if (response.message) {
        console.log(response.message);
        sendServerError(res, response.message);
      } else {
        sendCreated(res, "group created successfully");
        console.log("succefull");
      }
    } catch (error) {
      console.log(error.message);
      sendServerError(res, error.message);
    }
  }
};
/////////////////////////////////////
// GETTING ALL GROUPS

export const getgroups = async (req, res) => {
  try {
    const data = await getgroupService();
    if (data.lenth === 0) {
      sendNotFound(res, "no groups please");
    } else {
     
      res.status(200).send(data)
      sendCreated(res, "collected all groups");
      console.log("succefull");
    
    }
  } catch (error) {}
};

///////////////////////////////////////////////
// GRETTING GROUPS BY ID
export const getgroupsById = async (req,res)=>{
  try {
     const data = await getgroupService()
     const group = data.find((item)=>item.PostID==req.params.id )
     if (!group){
        sendNotFound(res, "group not found")
     }
     else{
        res.status(200).send(group)
     }
  } catch (error) {
     sendServerError(res, error.message)
  }
}