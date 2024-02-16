import Joi from 'joi';

export const friendValidator = (friend) => {
   const friendValidatorSchema = Joi.object({
      FriendshipID: Joi.number().integer().required(),
      User1ID: Joi.number().integer().required(),
      User2ID: Joi.number().integer().required(),
      FriendshipDate: Joi.number().integer().required(),
   });
   return friendValidatorSchema.validate(friend);
}
