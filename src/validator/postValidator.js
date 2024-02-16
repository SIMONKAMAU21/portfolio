import Joi from 'joi';

export const postValidator = (post) => {
const postValidatorSchema = Joi.object({
   PostID: Joi.number().integer().required(),
   UserID: Joi.string().required(),
   Likes: Joi.string().required(),
   PostDate: Joi.number().required(),
   Content: Joi.string().required(),
   Comments: Joi.number().integer().required(),
});

   return postValidatorSchema.validate(post);
}
