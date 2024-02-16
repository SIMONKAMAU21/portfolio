import Joi from 'joi';

export const commentValidator = (comment) => {
const commentValidatorSchema = Joi.object({
   CommentID: Joi.number().integer().required(),
   UserID: Joi.string().required(),
   PostID: Joi.number().integer().required(),
   CommentDate: Joi.number().required(),
   Content: Joi.string().required(),
 
});

   return commentValidatorSchema.validate(comment);
}
