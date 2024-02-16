import Joi from 'joi';

export const messageValidator = (message) => {
   const messageValidatorSchema = Joi.object({
      MessageID: Joi.number().integer().required(),
      SenderID: Joi.number().integer().required(),
      ReceiverID: Joi.number().integer().required(),
      MessageDate: Joi.number().integer().required(),
      Content: Joi.string().required(),
   });
   return messageValidatorSchema.validate(message);
}








// MessageID INT PRIMARY KEY,
//     SenderID INT,
//     ReceiverID INT,
//     MessageDate DATETIME,
//     Content TEXT,