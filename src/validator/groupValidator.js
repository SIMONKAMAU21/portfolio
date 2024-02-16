import Joi from 'joi';
export const groupValidator = (group) => {

const groupValidatorSchema = Joi.object({
   GroupID: Joi.number().integer().required(),
   GroupName: Joi.string().required(),
   Description: Joi.string().required(),
   CreatedDate: Joi.number().integer().required(),
});

   return groupValidatorSchema.validate(group);
}
