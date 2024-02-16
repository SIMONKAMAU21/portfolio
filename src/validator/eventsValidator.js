import Joi from 'joi';

export const eventValidator = (event) => {
const eventValidatorSchema = Joi.object({
   EventID: Joi.number().integer().required(),
   EventName: Joi.number().required(),
   Descri_ption: Joi.string().required(),
   Location: Joi.number().required(),
   EventPosterURL: Joi.number().required(),
   EventDate: Joi.number().integer().required(),

 
});

   return eventValidatorSchema.validate(event);
}


