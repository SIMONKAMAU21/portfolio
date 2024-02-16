import Joi from 'joi';

export const photoValidator = (photo) => {
const photoValidatorSchema = Joi.object({
   PhotoID: Joi.number().integer().required(),
   UserID: Joi.number().required(),
   PhotoURL: Joi.string().required(),
   UploadDate: Joi.number().required(),

 
});

   return photoValidatorSchema.validate(photo);
}
