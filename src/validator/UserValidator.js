
import joi from 'joi';

export const userValidator = (user) => {
    const userValidatorSchema = joi.object({
      
        UserID: joi.string().required(),
        Username: joi.string().required(),
        Email: joi.string().email().required(),
        Password: joi.string().required(),
        TagName: joi.string().required(),
        Location :joi.string().required()
      });
      return userValidatorSchema.validate(user);
      
   }
   
   export const userLoginValidator = (user) => {
      const userLoginValidatorSchema = joi.object({
       Username: joi.string().required(),
       Password: joi.string().required()

   });
   return userLoginValidatorSchema.validate(user);
}